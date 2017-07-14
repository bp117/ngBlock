import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent} from './customerWallet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [Material2AppAppComponent],
  entryComponents: [],
  bootstrap: [Material2AppAppComponent]
})
export class MaterialAppModule { }