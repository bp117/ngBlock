import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {PersonComponent} from "../user/person.component";
import {NotificationComponent} from "../notification/notification.component";
//import {DashboardComponent} from "../dashboard/dashboard.component";


const headerRoutes: Routes = [
    { path: "person", component: PersonComponent },   
    { path: "notifications", component: NotificationComponent }
   // { path: "dashboard", component: DashboardComponent }    
    
];

@NgModule({
    imports: [
        RouterModule.forChild(
            headerRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class HeaderRoutingModule { }