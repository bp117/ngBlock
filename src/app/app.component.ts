import {Component, Inject, ViewChild, TemplateRef} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {CustomerFormComponent} from './customerWallet.component';

import {AccountTypeComponent} from './addAccountType.component';

import {InsurenceFormComponent} from './insurenceForm.component';

@Component({
  selector: 'material2-app-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class Material2AppAppComponent {
  lastCloseResult: string;
  actionsAlignment: string;
  config = {
    disableClose: false,
    panelClass: 'custom-overlay-pane-class',
    hasBackdrop: true,
    backdropClass: '',
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      message: 'Jazzy jazz jazz'
    }
  };
  numTemplateOpens = 0;

  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any) {  
      
    dialog.afterOpen.subscribe(() => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }
  selectedEmoji: string;
    modalSelected = false;
    
  openCustomerWallet() {    
     // if(!this.modalSelected)  {  
            this.dialog.open(CustomerFormComponent);  
        //    this.modalSelected = true;
         // }
      }
    
  openInsuranceForm(){
     this.dialog.open(InsurenceFormComponent);   
    }
    openAccountType(){
     this.dialog.open(AccountTypeComponent);  
    }
 
}


