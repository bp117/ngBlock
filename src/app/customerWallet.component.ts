import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'material2-app-app',
  templateUrl: 'customerWallet.component.html',
  styleUrls: ['app.component.css'],
})
export class Material2AppAppComponent {
        constructor(public dialog: MdDialog) {}
       balance : any = 10000;    
 
      accTypes  = [
        {viewValue: 'Savings', value: 'Savings Acc'},
        {viewValue: 'Basic Checking', value: 'Basic Checking Accounts'},
        {viewValue: 'Interest-Bearing Checking', value: 'Interest-Bearing Checking Accounts'},
        {viewValue: 'Basic Checking', value: 'Basic Checking Accounts'}        
      ];
    
    sendAmount(customerForm : any) {               
         console.debug("sendAmount customerForm  ",customerForm);   
    }
    
    data: string; 
    onSubmit(customerForm : any) {
           // this.submitted = true;
            //this.data = JSON.stringify(data, null, 2);
            console.log("customerForm  ",customerForm);
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
    
   
 
}

