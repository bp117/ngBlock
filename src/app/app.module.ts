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
import {InsurenceFormComponent} from "./taxmanagement/insurenceForm.component";
import {AccountTypeComponent} from "./acctType/addAccountType.component";
import {LedgerFormComponent} from "./ledger/ledgerForm.component";
import {SearchComponent} from "./taxmanagement/search.component";

import {CustomerDashboardComponent} from "./dashboard/customer-dashboard/customerdashboard.component";
import {PersonDashboardComponent} from "./dashboard/person-dashboard/persondashboard.component";

import {EscrowAccDetailsComponent} from "./escrow/escrowAccDetails.component";
import {EscrowInsurenceFormComponent} from "./escrow/escrowInsurenceForm.component";

import {TestComponent} from "./testcomponent/testComponent.component";

@NgModule({
    imports: [BrowserModule,FormsModule, BrowserAnimationsModule,AppRoutingModule,MaterialModule,
    MdDatepickerModule,MdNativeDateModule   
    ],
    declarations: [AppComponent, HomeComponent, Reverseletters,
    PersonComponent,TableComponent,TypographyComponent,IconComponent,NotificationComponent,
    HeaderComponent,FooterComponent,SideNavComponent,CustomerFormComponent,InsurenceFormComponent,
    AccountTypeComponent,LedgerFormComponent,SearchComponent,CustomerDashboardComponent,PersonDashboardComponent,
    EscrowAccDetailsComponent,EscrowInsurenceFormComponent,TestComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}