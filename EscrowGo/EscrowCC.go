package main

import (
	"errors"
	"fmt"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"encoding/json"
	//"os/exec"
	"time"
	"strconv"
)

var logger = shim.NewLogger("mylogger")

// This could be stored on a blockchain table or an application
var statusType = []string{"NEW", "TAX_DEDUCTED", "AMOUNT_CREDITED", "CLOSED"}
var escrowTables = []string{"EscrowAppTable"}

type EscrowChaincode struct {
}

type  Bank struct {
	 BankId				string		`json:"bankId"`
	 Name				string		`json:"name"`
	 AmountCredited		string		`json:"amountCredited"`
}

type TaxFinancialInfo struct { 
	TaxId    				string		`json:"taxId"`
	TaxAuthorityName   		string		`json:"taxAuthorityName"`
    TaxPercentage        	int 		`json:"taxPercentage"`
    StartDate   			string 		`json:"startDate"`
    Frequency 				int 		`json:"frequency"`
    AmountCredited			string		`json:"amountCredited"`
    TaxCurrentBalance		string		`json:"taxCurrentBalance"`
}

type EscrowApplication struct {   
    ParcelId               string        		`json:"parcelId"`
    PropertyValue		   int					`json:"propertyValue"`
    CustomerId             string  		 		`json:"customerId"`
    CurrentBalance		   int 		 			`json:"currentBalance"`
    //TaxFinancialInfo       *TaxFinancialInfo 	`json:"taxFinancialInfo,omitempty"`
    Bank				   *Bank				`json:"bank,omitempty"`
    Source                 string        		`json:"source"`
    Status				   string				`json:"status"`
    LastModifiedDate       string       		`json:"lastModifiedDate"`
}

func GetNumberOfKeys(tname string) int {
	TableMap := map[string]int{
		"EscrowAppTable":        1,
		
	}
	return TableMap[tname]
}
 
/**type BankEscrowApplication struct {   
    ParcelId               string        		`json:"parcelId"`
    PropertyValue		   int					`json:"propertyValue"`
    CustomerId             string  		 		`json:"customerId"`
    CurrentBalance		   int 		 			`json:"currentBalance"`
   // TaxFinancialInfo       *TaxFinancialInfo 	`json:"taxFinancialInfo,omitempty"`
    Bank				   *Bank				`json:"bank,omitempty"`
    Source                 string        		`json:"source"`
    Status				   string				`json:"status"`
    LastModifiedDate       string       		`json:"lastModifiedDate"`
}

type TaxEscrowApplication struct {   
    ParcelId               string        		`json:"parcelId"`
    PropertyValue		   int					`json:"propertyValue"`
    CustomerId             string  		 		`json:"customerId"`
    CurrentBalance		   int 		 			`json:"currentBalance"`
    TaxFinancialInfo       *TaxFinancialInfo 	`json:"taxFinancialInfo,omitempty"`
    //Bank				   *Bank				`json:"bank,omitempty"`
    Source                 string        		`json:"source"`
    Status				   string				`json:"status"`
    LastModifiedDate       string       		`json:"lastModifiedDate"`
}
**/
// Custom Event
type escrowEvent struct {
    Type        string `json:"type"`
    Description string `json:"description"`
}

func (t *EscrowChaincode) Init(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {
	fmt.Println("[Escrow Application] Init")
	var err error
	
	for _, val := range escrowTables {
		err = stub.DeleteTable(val)
		if err != nil {
			return nil, fmt.Errorf("Init(): DeleteTable of %s  Failed ", val)
		}
		err = InitLedger(stub, val)
		if err != nil {
			return nil, fmt.Errorf("Init(): InitLedger of %s  Failed ", val)
		}
	}
	// Update the ledger with the Application version
	err = stub.PutState("version", []byte(strconv.Itoa(1)))
	if err != nil {
		return nil, err
	}

	fmt.Println("Init() Initialization Complete  : ", args)
	return []byte("Init(): Initialization Complete"), nil
}

func (t *EscrowChaincode) Query(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {
   
   switch function { 
   	   case "GetAllTransactions":
		   return GetAllTransactions(stub, args)
	   case "GetLastTransaction":
		   return GetLastTransaction(stub, args)
	   case "GetNoOfTransactions":
		   return GetNoOfTransactions(stub, args)
	   case "GetEscrowTransactionLog":
		   return GetEscrowTransactionLog(stub, args)
	   case "GetCurrentEscrowBalance":
		   return GetCurrentEscrowBalance(stub, args)
	   case "GetNextUpcomingPayments":
		   return GetNextUpcomingPayments(stub, args)
	   case "GetParcelPayments":
		   return GetParcelPayments(stub, args)	 
	   default:
			return nil, nil	        	   		   
   }
   
   /**
    if function == "GetEscrowApplication" {
		return GetEscrowApplication(stub, args)
	}
	return nil, nil
	**/
}
 
func (t *EscrowChaincode) Invoke(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {
	
	switch function {
		case "CreditIntoEscrowAccount":
			return CreditIntoEscrowAccount(stub, args)
		//case "PerformEscrowTaxDeduction":
		//	return PerformEscrowTaxDeduction(stub, args)
		case "EscrowAmountManualCredit":
			return EscrowAmountManualCredit(stub, args)
		case "ImportEscrowAccount":
			return ImportEscrowAccount(stub, args)	
		default:
			return nil, nil		
	}
	
	/**
    if function == "CreditIntoEscrowAccount" {
        username, _ := GetCertAttribute(stub, "username")
        role, _ := GetCertAttribute(stub, "role")
        if role == "Bank_Escrow_Admin" {
            return CreditIntoEscrowAccount(stub, args)
        } else {
            return nil, errors.New(username + " with role " + role + " does not have access to create a escrow application block")
        }
 
    } else if function == "CreditIntoEscrowAccount" {
    
    }
    **/
   // return nil, nil
}

/**********************************************************************************/
/************************** Invoke APIs *******************************************/
/**********************************************************************************/
func CreditIntoEscrowAccount(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering CreditIntoEscrowAccount")
	var result EscrowApplication
    if len(args) != 8 {
        fmt.Println("Invalid input args")
        return nil, errors.New("Expected the escrow details for Escrow Block creation")
    }
 
   /** out, err := exec.Command("uuidgen").Output()
    if err != nil {
        log.Fatal(err)
        return nil, errors.New("Not able to generate Unique ID")
    }
    uId := string(out[:])
    var escrowApplicationId = "e_"+uId**/
    var escrowApplicationId = args[0]
    var bankId = "user_type1_1"
    //var escrowApplicationInput = args[1]
    //fmt.Printf("%s", out)
   
   propVal, err := strconv.Atoi(args[2])
   if err != nil {
		fmt.Println("Int conversion error: ", err)
		return nil, err
	}
   curBal, err := strconv.Atoi(args[4])
   if err != nil {
		fmt.Println("Int conversion error: ", err)
		return nil, err
	}
   mapD := &Bank{bankId, args[5], args[6]}
  
   var dTime = time.Now().UTC().Format("2006-01-02 15:04:05 UTC") 
   
   result.ParcelId = args[1]
   result.PropertyValue = propVal
   result.CustomerId = args[3]
   result.CurrentBalance = curBal
   result.Bank = mapD
   result.Source = args[7]
   result.Status = statusType[0]
   result.LastModifiedDate = dTime 
    
	escrowApplicationInput := EscrowApplication {							 
							 args[1],
							 propVal,
							 args[3],
							 curBal,
							 mapD,
							 args[7],
							 statusType[0],
							 dTime,
						 }
	
	ajson, err := json.Marshal(escrowApplicationInput)
	//ajson, err := json.MarshalIndent(result, "", " ")
	if err != nil {
		fmt.Println("toJSON error: ", err)
		return nil, err
	}
	
	keys := []string{args[0]}
	
	err = UpdateLedger(stub, "EscrowAppTable", keys, ajson)
	 
   /** err = stub.PutState(escrowApplicationId, []byte(ajson))**/
    if err != nil {
        fmt.Println("Could not save escrow application to ledger", err)
        return ajson, err
    }
    
    var event = escrowEvent{"CreditIntoEscrowAccount", "Successfully created escrow application with ID " + escrowApplicationId}
    eventBytes, err := json.Marshal(&event)
    
   
    if err != nil {
        return nil, err
    }
    
    fmt.Println("Successfully saved escrow application")
    return eventBytes, nil
}

/**func PerformEscrowTaxDeduction(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
	 fmt.Println("Entering PerformEscrowTaxDeduction")
	var result EscrowApplication 
	
	var escrowApplicationId = args[0]
    bytes, err := stub.GetState(escrowApplicationId)
    if err != nil {
        fmt.Println("Could not fetch escrow application with id "+escrowApplicationId+" from ledger", err)
        return nil, err
    }
	 
	ea :=  EscrowApplication{}
	
	if err := json.Unmarshal(bytes, &ea); err != nil {
        fmt.Println("JSON to EscrowApplication error: ", err)
		return nil, err
    }
	
	
	var dTime = time.Now().UTC().Format("2006-01-02 15:04:05 UTC")
	var taxId = "user_type1_2"
	taxPer, err := strconv.Atoi(args[2])
    if err != nil {
		fmt.Println("Int conversion error: ", err)
		return nil, err
	}
    
    frequency, err := strconv.Atoi(args[4])
    if err != nil {
		fmt.Println("Int conversion error: ", err)
		return nil, err
	}
    
    taxCurBal, err := strconv.Atoi(ea.TaxFinancialInfo.TaxCurrentBalance)
    if err != nil {
		fmt.Println("Int conversion error: ", err)
		return nil, err
	}
	
	var amtCredited = (taxPer * ea.PropertyValue) / 100
	var taxBal = taxCurBal + amtCredited
	amtC := strconv.Itoa(amtCredited)
	taxCB := strconv.Itoa(taxBal)
	mapT := &TaxFinancialInfo{taxId, args[1], taxPer, args[3], frequency, amtC, taxCB}
	 
   result.ParcelId = ea.ParcelId
   result.PropertyValue = ea.PropertyValue
   result.CustomerId = ea.CustomerId
   result.CurrentBalance = ea.CurrentBalance
   result.TaxFinancialInfo = mapT
   result.Source = args[5]
   result.Status = statusType[1]
   result.LastModifiedDate = dTime
	
	ajson, err := json.MarshalIndent(result, "", " ")
	if err != nil {
		fmt.Println("toJSON error: ", err)
		return nil, err
	}
	
	keys := []string{args[0]}
	err = UpdateLedger(stub, "EscrowAppTable", keys, ajson)
	//err = stub.PutState(escrowApplicationId, []byte(ajson))
    if err != nil {
        fmt.Println("Could not save Tax escrow application to ledger", err)
        return nil, err
    }
	 
	var event = escrowEvent{"PerformEscrowTaxDeduction", "Successfully performed Tax operation in escrow application with ID " + escrowApplicationId}
    eventBytes, err := json.Marshal(&event)
    
   
    if err != nil {
        return nil, err
    }
    
    fmt.Println("Successfully performed Tax operationn")
    return eventBytes, nil
	//return nil, nil
}
**/
func EscrowAmountManualCredit(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
	 fmt.Println("Entering EscrowAmountManualCredit")
	return nil, nil
}

func ImportEscrowAccount(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
	 fmt.Println("Entering ImportEscrowAccount")
	return nil, nil
}

/**********************************************************************************/
/************************** Query APIs *******************************************/
/**********************************************************************************/

func GetAllTransactions(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
	rows, err := GetList(stub, "EscrowAppTable", args)
	if err != nil {
		return nil, fmt.Errorf("GetAllTransactions operation failed. Error marshaling JSON: %s", err)
	}

	nCol := GetNumberOfKeys("EscrowAppTable")

	tlist := make([]EscrowApplication, len(rows))
	for i := 0; i < len(rows); i++ {
		ts := rows[i].Columns[nCol].GetBytes()
		eApp, err := JSONtoEscrowApp(ts)
		if err != nil {
			fmt.Println("GetAllTransactions() Failed : Ummarshall error")
			return nil, fmt.Errorf("GetAllTransactions() operation failed. %s", err)
		}
		tlist[i] = eApp
	}

	jsonRows, _ := json.Marshal(tlist)
	//jsonRows, _ := json.MarshalIndent(tlist, "", " ")
	fmt.Println("List of Escrow Txns Requested : ", jsonRows)
	return jsonRows, nil
}

//////////////////////////////////////////////////////////
// Converts JSON String to EscrowApplication Object
//////////////////////////////////////////////////////////
func JSONtoEscrowApp(areq []byte) (EscrowApplication, error) {

	myHand := EscrowApplication{}
	err := json.Unmarshal(areq, &myHand)
	if err != nil {
		fmt.Println("JSONtoEscrowApp error: ", err)
		return myHand, err
	}
	return myHand, err
}

func GetLastTransaction(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering GetLastTransaction")
 
    if len(args) < 1 {
        fmt.Println("Invalid number of arguments")
        return nil, errors.New("Missing Escrow application ID")
    }
 
    var escrowApplicationId = args[0]
    bytes, err := stub.GetState(escrowApplicationId)
    if err != nil {
        fmt.Println("Could not fetch escrow application with id "+escrowApplicationId+" from ledger", err)
        return nil, err
    }
    return bytes, nil
}

func GetNoOfTransactions(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering GetNoOfTransactions")
	
	tn := "EscrowAppTable"
	rows, err := GetList(stub, tn, args)
	if err != nil {
		return nil, fmt.Errorf("GetNoOfTransactions operation failed. %s", err)
	}
	nBids := len(rows)
	return []byte(strconv.Itoa(nBids)), nil
}  

func GetEscrowTransactionLog(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering GetEscrowTransactionLog")
	
	var escrowApplicationId = args[0]
    bytes, err := stub.GetState(escrowApplicationId)
	 if err != nil {
        return nil, err
    }
	return bytes, nil
}

func GetCurrentEscrowBalance(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering GetCurrentEscrowBalance")
	
	var escrowApplicationId = args[0]
    bytes, err := stub.GetState(escrowApplicationId)
	 if err != nil {
        return nil, err
    }
	return bytes, nil
}

func GetNextUpcomingPayments(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering GetNextUpcomingPayments")
	
	var escrowApplicationId = args[0]
    bytes, err := stub.GetState(escrowApplicationId)
	 if err != nil {
        return nil, err
    }
	return bytes, nil
}

func GetParcelPayments(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
    fmt.Println("Entering GetParcelPayments")
	
	var escrowApplicationId = args[0]
    bytes, err := stub.GetState(escrowApplicationId)
	 if err != nil {
        return nil, err
    }
	return bytes, nil
}  

/**
Updates the status of the Escrow application

func UpdateEscrowApplication(stub shim.ChaincodeStubInterface, args []string) ([]byte, error) {
	logger.Debug("Entering UpdateEscrowApplication")

	if len(args) < 2 {
		logger.Error("Invalid number of args")
		return nil, errors.New("Expected atleast two arguments for escrow application update")
	}

	var escrowApplicationId = args[0]
	var status = args[1]

	eaBytes, err := stub.GetState(escrowApplicationId)
	if err != nil {
		logger.Error("Could not fetch escrow application from ledger", err)
		return nil, err
	}
	var escrowApplication EscrowApplication
	err = json.Unmarshal(eaBytes, &escrowApplication)
	escrowApplication.Status = status

	eaBytes, err = json.Marshal(&escrowApplication)
	if err != nil {
		logger.Error("Could not marshal escrow application post update", err)
		return nil, err
	}

	err = stub.PutState(escrowApplicationId, eaBytes)
	if err != nil {
		logger.Error("Could not save escrow application post update", err)
		return nil, err
	}

	var escrowEvent = "{eventType: 'escrowApplicationUpdate', description:" + escrowApplicationId + "' Successfully updated status'}"
	err = stub.SetEvent("evtSender", []byte(escrowEvent))
	if err != nil {
		return nil, err
	}
	logger.Info("Successfully updated escrow application")
	return nil, nil

}
**/

//Retrieving attributes from the transaction certificate of the caller
/**
func GetCertAttribute(stub shim.ChaincodeStubInterface, attributeName string) (string, error) {
    fmt.Println("Entering GetCertAttribute")
    attr, err := stub.ReadCertAttribute(attributeName)
    if err != nil {
        return "", errors.New("Couldn't get attribute " + attributeName + ". Error: " + err.Error())
    }
    attrString := string(attr)
    return attrString, nil
}
**/
 
 func InitLedger(stub shim.ChaincodeStubInterface, tableName string) error {

	// Generic Table Creation Function - requires Table Name and Table Key Entry
	// Create Table - Get number of Keys the tables supports
	// This version assumes all Keys are String and the Data is Bytes	

	nKeys := GetNumberOfKeys(tableName)
	if nKeys < 1 {
		fmt.Println("Atleast 1 Key must be provided \n")
		fmt.Println("Escrow_Application: Failed creating Table ", tableName)
		return errors.New("Escrow_Application: Failed creating Table " + tableName)
	}

	var columnDefsForTbl []*shim.ColumnDefinition

	for i := 0; i < nKeys; i++ {
		columnDef := shim.ColumnDefinition{Name: "keyName" + strconv.Itoa(i), Type: shim.ColumnDefinition_STRING, Key: true}
		columnDefsForTbl = append(columnDefsForTbl, &columnDef)
	}

	columnLastTblDef := shim.ColumnDefinition{Name: "Details", Type: shim.ColumnDefinition_BYTES, Key: false}
	columnDefsForTbl = append(columnDefsForTbl, &columnLastTblDef)

	// Create the Table (Nil is returned if the Table exists or if the table is created successfully
	err := stub.CreateTable(tableName, columnDefsForTbl)

	if err != nil {
		fmt.Println("Escrow_Application: Failed creating Table ", tableName)
		return errors.New("Escrow_Application: Failed creating Table " + tableName)
	}

	return err
}


func UpdateLedger(stub shim.ChaincodeStubInterface, tableName string, keys []string, args []byte) error {

	nKeys := GetNumberOfKeys(tableName)
	if nKeys < 1 {
		fmt.Println("Atleast 1 Key must be provided \n")
	}

	var columns []*shim.Column

	for i := 0; i < nKeys; i++ {
		col := shim.Column{Value: &shim.Column_String_{String_: keys[i]}}
		columns = append(columns, &col)
	}

	lastCol := shim.Column{Value: &shim.Column_Bytes{Bytes: []byte(args)}}
	columns = append(columns, &lastCol)

	row := shim.Row{columns}
	ok, err := stub.InsertRow(tableName, row)
	if err != nil {
		return fmt.Errorf("UpdateLedger: InsertRow into "+tableName+" Table operation failed. %s", err)
	}
	if !ok {
		return errors.New("UpdateLedger: InsertRow into " + tableName + " Table failed. Row with given key " + keys[0] + " already exists")
	}

	fmt.Println("UpdateLedger: InsertRow into ", tableName, " Table operation Successful. ")
	return nil
}

func DeleteFromLedger(stub shim.ChaincodeStubInterface, tableName string, keys []string) error {
	var columns []shim.Column

	//nKeys := GetNumberOfKeys(tableName)
	nCol := len(keys)
	if nCol < 1 {
		fmt.Println("Atleast 1 Key must be provided \n")
		return errors.New("DeleteFromLedger failed. Must include at least key values")
	}

	for i := 0; i < nCol; i++ {
		colNext := shim.Column{Value: &shim.Column_String_{String_: keys[i]}}
		columns = append(columns, colNext)
	}

	err := stub.DeleteRow(tableName, columns)
	if err != nil {
		return fmt.Errorf("DeleteFromLedger operation failed. %s", err)
	}

	fmt.Println("DeleteFromLedger: DeleteRow from ", tableName, " Table operation Successful. ")
	return nil
}

func QueryLedger(stub shim.ChaincodeStubInterface, tableName string, args []string) ([]byte, error) {

	var columns []shim.Column
	nCol := GetNumberOfKeys(tableName)
	for i := 0; i < nCol; i++ {
		colNext := shim.Column{Value: &shim.Column_String_{String_: args[i]}}
		columns = append(columns, colNext)
	}

	row, err := stub.GetRow(tableName, columns)
	fmt.Println("Length or number of rows retrieved ", len(row.Columns))

	if len(row.Columns) == 0 {
		jsonResp := "{\"Error\":\"Failed retrieving data " + args[0] + ". \"}"
		fmt.Println("Error retrieving data record for Key = ", args[0], "Error : ", jsonResp)
		return nil, errors.New(jsonResp)
	}

	//fmt.Println("User Query Response:", row)
	//jsonResp := "{\"Owner\":\"" + string(row.Columns[nCol].GetBytes()) + "\"}"
	//fmt.Println("User Query Response:%s\n", jsonResp)
	Avalbytes := row.Columns[nCol].GetBytes()

	// Perform Any additional processing of data
	fmt.Println("QueryLedger() : Successful - Proceeding to ProcessRequestType ")
	//err = ProcessQueryResult(stub, Avalbytes, args)
	if err != nil {
		fmt.Println("QueryLedger() : Cannot create object  : ", args[1])
		jsonResp := "{\"QueryLedger() Error\":\" Cannot create Object for key " + args[0] + "\"}"
		return nil, errors.New(jsonResp)
	}
	return Avalbytes, nil
}

func GetList(stub shim.ChaincodeStubInterface, tableName string, args []string) ([]shim.Row, error) {
	var columns []shim.Column

	nKeys := GetNumberOfKeys(tableName)
	nCol := len(args)
	if nCol < 1 {
		fmt.Println("Atleast 1 Key must be provided \n")
		return nil, errors.New("GetList failed. Must include at least key values")
	}

	for i := 0; i < nCol; i++ {
		colNext := shim.Column{Value: &shim.Column_String_{String_: args[i]}}
		columns = append(columns, colNext)
	}

	rowChannel, err := stub.GetRows(tableName, columns)
	if err != nil {
		return nil, fmt.Errorf("GetList operation failed. %s", err)
	}
	var rows []shim.Row
	for {
		select {
		case row, ok := <-rowChannel:
			if !ok {
				rowChannel = nil
			} else {
				rows = append(rows, row)
				//If required enable for debugging
				//fmt.Println(row)
			}
		}
		if rowChannel == nil {
			break
		}
	}

	fmt.Println("Number of Keys retrieved : ", nKeys)
	fmt.Println("Number of rows retrieved : ", len(rows))
	return rows, nil
}
 
func main() {
	lld, _ := shim.LogLevel("DEBUG")
	fmt.Println(lld)

	logger.SetLevel(lld)
	fmt.Println(logger.IsEnabledFor(lld))

	err := shim.Start(new(EscrowChaincode))
	if err != nil {
		logger.Error("Could not start SampleChaincode")
	} else {
		logger.Info("SampleChaincode successfully started")
	}
}
