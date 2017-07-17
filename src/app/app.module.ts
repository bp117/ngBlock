import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent}  from './app.component';
import {CustomerFormComponent} from './customerWallet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import {InsurenceFormComponent} from './insurenceForm.component';
import {AccountTypeComponent} from './addAccountType.component';

@NgModule({
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [Material2AppAppComponent,CustomerFormComponent,InsurenceFormComponent,AccountTypeComponent],
  entryComponents: [CustomerFormComponent,InsurenceFormComponent,AccountTypeComponent],
  bootstrap: [Material2AppAppComponent]
})
export class MaterialAppModule { }