import { Component, Optional, Input, OnChanges } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {DataService} from "./../shared/data.service";

@Component({
  selector: 'display-ledger-modal',
  templateUrl: 'ledgerForm.component.html'
})
export class LedgerFormComponent implements OnChanges{
        constructor(public dataService:DataService) { }
      
   @Input() data: any; 
    onSubmit(customerForm : any) {
           // this.submitted = true;
            //this.data = JSON.stringify(data, null, 2);
            console.log("customerForm  ",customerForm);
            
        }
  frequencies  = [
        {viewValue: 'Half-Yearly', value: 'Half-Yearly'},
        {viewValue: 'Yearly', value: 'Yearly'}     
      ];

    change(event :any){
        console.log("Frequency Changed");
      }
      ngOnChanges(customerForm:any){
        console.log("Tax:",this.data);
        
      }
}

