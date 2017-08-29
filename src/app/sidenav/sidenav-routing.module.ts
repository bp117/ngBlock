import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {PersonComponent} from "../user/person.component";
import {TableComponent} from "../table/table.component";
import {TypographyComponent} from "../typography/typography.component";
import {IconComponent} from "../icons/icon.component";
import {NotificationComponent} from "../notification/notification.component";
import {CustomerFormComponent} from "../customer-wallet/customerWallet.component";
import {InsurenceFormComponent} from "../taxmanagement/insurenceForm.component";
import {AccountTypeComponent} from "../acctType/addAccountType.component";
import {CustomerDashboardComponent} from "../dashboard/customer-dashboard/customerdashboard.component";
import {PersonDashboardComponent} from "../dashboard/person-dashboard/persondashboard.component";

const sideNavRoutes: Routes = [
    { path: "person", component: PersonComponent },
    { path: "table", component: TableComponent },
    { path: "librarybooks", component: TypographyComponent },
    { path: "bubblechart", component: IconComponent },
    { path: "notifications", component: NotificationComponent },    
     { path: "customerWallet", component: CustomerFormComponent },
     { path: "addAccType", component: AccountTypeComponent },
      { path: "taxmgt", component: InsurenceFormComponent },      
      { path: "customerdashboard", component: CustomerDashboardComponent },
       { path: "persondashboard", component: PersonDashboardComponent }    
   
];

@NgModule({
    imports: [
        RouterModule.forChild(
            sideNavRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class SideNavRoutingModule { }