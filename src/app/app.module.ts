import { DataService } from './shared/data.service';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {AppComponent} from "./app.component";
import { AppRoutingModule } from './app-routing.module';

import {Reverseletters} from "./app.pipe";
import {PersonComponent} from "./user/person.component";
import {NotificationComponent} from "./notification/notification.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SideNavComponent} from "./sidenav/sidenav.component";
import {HomeComponent} from "./home/home.component";
import {LedgerFormComponent} from "./ledger/ledgerForm.component";
import {SearchComponent} from "./taxmanagement/search.component";

import {EscrowAccDetailsComponent} from "./escrow/escrowAccDetails.component";
import {EscrowInsurenceFormComponent} from "./escrow/escrowinsurenceForm.component";

//import {TestComponent} from "./testcomponent/testComponent.component";

import {HeaderModule} from "./header/header.module";
import {SideNavModule} from "./sidenav/sidenav.module";
import {NotificationModule} from "./notification/notification.module";

import {InsurenceFormComponent} from "./taxmanagement/insurenceForm.component";
import {CustomerDashboardComponent} from "./dashboard/customer-dashboard/customerdashboard.component";
import {PersonDashboardComponent} from "./dashboard/person-dashboard/persondashboard.component";


@NgModule({
    imports: [BrowserModule,FormsModule, BrowserAnimationsModule,AppRoutingModule,MaterialModule,
    MdDatepickerModule,MdNativeDateModule,HeaderModule,SideNavModule,HttpModule
    ],
    declarations: [AppComponent, HomeComponent, Reverseletters,NotificationComponent,
    HeaderComponent,FooterComponent,SideNavComponent,PersonComponent,
    LedgerFormComponent,SearchComponent,InsurenceFormComponent,CustomerDashboardComponent,PersonDashboardComponent,

    EscrowAccDetailsComponent,EscrowInsurenceFormComponent],
    
  providers: [
    DataService
  ],

    bootstrap: [AppComponent]
})
export class AppModule {}