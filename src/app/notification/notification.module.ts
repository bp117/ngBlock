import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';

import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NotificationComponent} from "../notification/notification.component";

import {SideNavModule} from "../sidenav/sidenav.module";

@NgModule({
    imports: [BrowserModule,FormsModule, BrowserAnimationsModule,MaterialModule,
    MdDatepickerModule,MdNativeDateModule
    ],
    declarations: [ NotificationComponent
    ]
})
export class NotificationModule {}