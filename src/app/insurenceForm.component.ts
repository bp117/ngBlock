import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'display-insurance-modal',
  templateUrl: 'insurenceForm.component.html',
  styleUrls: ['app.component.css'],
})
export class InsurenceFormComponent {
        constructor(public dialogRef: MdDialogRef<InsurenceFormComponent>) {}
          
        interestRate = 2;
 
      states  = [{viewValue:"NJ"},{viewValue:"WV"},{viewValue:"MN"},{viewValue:"SD"},{viewValue:"OK"},{viewValue:"AK"},{viewValue:"AL"},
                 {viewValue:"ND"},{viewValue:"WY"},{viewValue:"CA"},{viewValue:"MA"},{viewValue:"VA"},{viewValue:"WI"},{viewValue:"AR"},
                 {viewValue:"NM"},{viewValue:"MD"},{viewValue:"TN"},{viewValue:"OH"},{viewValue:"NE"},{viewValue:"NH"},{viewValue:"ME"},
                {viewValue:"GA"},{viewValue:"IL"},{viewValue:"MI"},{viewValue:"KS"},{viewValue:"UT"},{viewValue:"NY"},{viewValue:"RI"},
                {viewValue:"DE"},{viewValue:"DC"},{viewValue:"SC"},{viewValue:"IA"},{viewValue:"MT"},{viewValue:"CO"},{viewValue:"VT"},
                {viewValue:"CT"},{viewValue:"FL"},{viewValue:"MS"},{viewValue:"IN"},{viewValue:"MO"},{viewValue:"LA"},{viewValue:"TX"},
                {viewValue:"ID"},{viewValue:"WA"},{viewValue:"NV"},{viewValue:"HI"},{viewValue:"PA"},{viewValue:"NC"},{viewValue:"KY"},
                {viewValue:"AZ"},{viewValue:"OR"}];
    
    
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
  
    data: string; 
    onSubmit(insuranceForm : any) {           
            console.log("insuranceForm  ",insuranceForm);
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
   
}

