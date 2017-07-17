import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'display-acctype-modal',
  templateUrl: 'addAccountType.component.html',
  styleUrls: ['app.component.css'],
})
export class AccountTypeComponent {
        constructor(public dialogRef: MdDialogRef<AccountTypeComponent>) {}
      
    
    sendAmount(addAccTypeForm : any) {               
         console.debug("sendAmount addAccTypeForm  ",addAccTypeForm);   
    }
    
    data: string; 
    onSubmit(addAccTypeForm : any) {          
            console.log("addAccTypeForm  ",addAccTypeForm);
        }

  
    private change(value: any) {
       console.log('Selected value is: ', value);
     }
    
/*choosenEmoji: string;
  confirmSelection() {
    this.dialogRef.close(this.choosenEmoji);
  }*/
}

