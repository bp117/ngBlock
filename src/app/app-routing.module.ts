import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {PersonComponent} from "./user/person.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SideNavComponent} from "./sidenav/sidenav.component";
import {HomeComponent} from "./home/home.component";

import {SearchComponent} from "./taxmanagement/search.component";
import {EscrowAccDetailsComponent} from "./escrow/escrowAccDetails.component";
import {EscrowInsurenceFormComponent} from "./escrow/escrowInsurenceForm.component";

const appRoutes: Routes = [
    
    { path: "home", component: HomeComponent },    
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