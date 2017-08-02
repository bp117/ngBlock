import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';

import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from "./app.component";
import { AppRoutingModule } from './app-routing.module';

import {Reverseletters} from "./app.pipe";
import {PersonComponent} from "./user/person.component";
import {TableComponent} from "./table/table.component";
import {TypographyComponent} from "./typography/typography.component";
import {IconComponent} from "./icons/icon.component";
import {NotificationComponent} from "./notification/notification.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SideNavComponent} from "./sidenav/sidenav.component";
import {HomeComponent} from "./home/home.component";
import {CustomerFormComponent} from "./customer-wallet/customerWallet.component";
import {InsurenceFormComponent} from "./insurence/insurenceForm.component";
import {AccountTypeComponent} from "./acctType/addAccountType.component";
import {LedgerFormComponent} from "./ledger/ledgerForm.component";
import {SearchComponent} from "./insurence/search.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EscrowAccDetailsComponent} from "./escrow/escrowAccDetails.component";

@NgModule({
    imports: [BrowserModule,FormsModule, BrowserAnimationsModule,AppRoutingModule,MaterialModule,
    MdDatepickerModule,MdNativeDateModule   
    ],
    declarations: [AppComponent, HomeComponent, Reverseletters,
    PersonComponent,TableComponent,TypographyComponent,IconComponent,NotificationComponent,
    HeaderComponent,FooterComponent,SideNavComponent,CustomerFormComponent,InsurenceFormComponent,
    AccountTypeComponent,LedgerFormComponent,SearchComponent,DashboardComponent,EscrowAccDetailsComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}