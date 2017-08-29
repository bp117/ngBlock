import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//import {PersonComponent} from "../user/person.component";
//import {NotificationComponent} from "../notification/notification.component";
//import {DashboardComponent} from "../dashboard/dashboard.component";


import {HeaderRoutingModule} from "./header-routing.module";

@NgModule({
    imports: [BrowserModule,FormsModule, BrowserAnimationsModule,MaterialModule,
    MdDatepickerModule,MdNativeDateModule,HeaderRoutingModule
    ],
    declarations: [
    ]
})
export class HeaderModule {}