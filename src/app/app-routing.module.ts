import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

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

const appRoutes: Routes = [
    { path: "person", component: PersonComponent },
    { path: "table", component: TableComponent },
    { path: "librarybooks", component: TypographyComponent },
    { path: "bubblechart", component: IconComponent },
    { path: "notifications", component: NotificationComponent },
    { path: "home", component: HomeComponent },
     { path: "customerWallet", component: CustomerFormComponent },
     { path: "addAccType", component: AccountTypeComponent },
      { path: "insurence", component: InsurenceFormComponent },
      { path: "ledgerForm", component: LedgerFormComponent },
      { path: "dashboard", component: DashboardComponent },      
    { path: '', component: HeaderComponent, outlet: 'header' },
    { path: '', component: FooterComponent, outlet: 'footer' },
    { path: '', component: SideNavComponent, outlet: 'navbar' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }