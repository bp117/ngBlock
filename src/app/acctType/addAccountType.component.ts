import {Component, Optional} from '@angular/core';
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'display-acctype-modal',
  templateUrl: 'addAccountType.component.html'
 
})
export class AccountTypeComponent {
        constructor() {}
      
    
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

}

