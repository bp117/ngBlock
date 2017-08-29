import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';

import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import {PersonComponent} from "../user/person.component";
import {TableComponent} from "../table/table.component";
import {TypographyComponent} from "../typography/typography.component";
import {IconComponent} from "../icons/icon.component";
//import {NotificationComponent} from "../notification/notification.component";
import {CustomerFormComponent} from "../customer-wallet/customerWallet.component";
//import {InsurenceFormComponent} from "../taxmanagement/insurenceForm.component";
import {AccountTypeComponent} from "../acctType/addAccountType.component";


import {SideNavRoutingModule} from "./sidenav-routing.module";

@NgModule({
    imports: [BrowserModule,FormsModule, BrowserAnimationsModule,MaterialModule,
    MdDatepickerModule,MdNativeDateModule,SideNavRoutingModule
    ],
    declarations: [ TableComponent,TypographyComponent,IconComponent,
    CustomerFormComponent,
    AccountTypeComponent
    ]
})
export class SideNavModule {}