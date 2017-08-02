import {Component, Output,Input} from '@angular/core';
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'display-escrowinsurance-modal',
  templateUrl: './escrowinsurenceForm.component.html'
})
export class EscrowInsurenceFormComponent {
        
     @Output() states : any;
         escrowDashboard:boolean = false;
        
    
        constructor() {
             this.states = [{viewValue:"NJ"},{viewValue:"WV"},{viewValue:"MN"},{viewValue:"SD"},{viewValue:"OK"},{viewValue:"AK"},{viewValue:"AL"},
                 {viewValue:"ND"},{viewValue:"WY"},{viewValue:"CA"},{viewValue:"MA"},{viewValue:"VA"},{viewValue:"WI"},{viewValue:"AR"},
                 {viewValue:"NM"},{viewValue:"MD"},{viewValue:"TN"},{viewValue:"OH"},{viewValue:"NE"},{viewValue:"NH"},{viewValue:"ME"},
                {viewValue:"GA"},{viewValue:"IL"},{viewValue:"MI"},{viewValue:"KS"},{viewValue:"UT"},{viewValue:"NY"},{viewValue:"RI"},
                {viewValue:"DE"},{viewValue:"DC"},{viewValue:"SC"},{viewValue:"IA"},{viewValue:"MT"},{viewValue:"CO"},{viewValue:"VT"},
                {viewValue:"CT"},{viewValue:"FL"},{viewValue:"MS"},{viewValue:"IN"},{viewValue:"MO"},{viewValue:"LA"},{viewValue:"TX"},
                {viewValue:"ID"},{viewValue:"WA"},{viewValue:"NV"},{viewValue:"HI"},{viewValue:"PA"},{viewValue:"NC"},{viewValue:"KY"},
                {viewValue:"AZ"},{viewValue:"OR"}];
             }

      
    

        interestRate = 2;
        data: string;
        //tableVisible : boolean = false; 
 
    
    
    
    
    counties = [{viewValue:"GA"},{viewValue:"IL"},{viewValue:"MI"}];
    /*getCountyList(item : any){
        countiesList = [{viewValue: 'Savings', value: 'NJ'},
                    {viewValue: 'Basic Checking', value: 'WV'},
                    {viewValue: 'Interest-Bearing Checking', value: 'MN'}];
        
        for(let c of countiesList){            
            if(c.value == item)
             this.counties = this.counties.add(c);
            }       
        
        }*/    
  
   
    onSubmit(insuranceForm : any) {           
            console.log("insuranceForm  ",insuranceForm);
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
   search(insuranceForm : any) {           
         
      this.escrowDashboard = true;
        }
}
    