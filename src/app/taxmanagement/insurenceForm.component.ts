import {Component, Output,Input} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'display-insurance-modal',
  templateUrl: 'insurenceForm.component.html',
   providers: [DataService]
})
export class InsurenceFormComponent {

           @Output() states : any;
     statesList:any; 
    
  
    
        constructor(public dataService: DataService) {
          
             }



    

        interestRate = 2;
        data: string;
        //tableVisible : boolean = false; 
 
    
    
    
    

    counties :any;
    countiesList:any
    getCountyList(name : any){
            this.countiesList = this.statesList.filter((item:any)=> item.state_name == name); 
            this.counties = this.countiesList[0].county_List;
           console.log("Counties:",this.counties);
        }    

   addrDetails:any;
    onSubmit(insuranceForm : any) {    
        this.tableVisible = true;       
                  this.dataService.getEscrowAcctDetails().then((res:any) => {
            this.addrDetails = res.propertyList.filter((item:any)=> item.county == insuranceForm.county); 
             //   this.acctDetails = res.propertyList;
                console.log(this.addrDetails)  ;
        }).catch((ex:any) => {
                console.error('Error fetching users', ex);
        }); 
            console.log("insuranceForm  ",insuranceForm);
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
  
        
  
    ngOnInit(){
           
             this.dataService.initCall();
            }
    
     ngAfterViewInit() {
        console.log("ngAfterViewInit Method");
        this.dataService.getStates().then((res:any) => {
                this.statesList = res.states;
                console.log(this.statesList)  ;
        }).catch((ex:any) => {
                console.error('Error fetching users', ex);
        });

     }
        tableVisible : boolean = false; 
 
    
    
    
 
   search(insuranceForm : any) {           
            console.log("insuranceForm in Search ",insuranceForm);
               
       
        }
   
   
}
    