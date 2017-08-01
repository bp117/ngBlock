import {Component, Optional} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';


@Component({
  selector: 'display-ledger-modal',
  templateUrl: 'ledgerForm.component.html'
})
export class LedgerFormComponent {
        constructor() { }
      
    data: string; 
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
}

