import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AboutComponent, ContactComponent, NotFoundComponent} from "./routecomponent";
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

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {path: "person", component: PersonComponent},
            {path: "table", component: TableComponent},
            {path: "librarybooks", component: TypographyComponent},
            {path: "bubblechart", component: IconComponent} ,
            {path: "notifications", component: NotificationComponent} ,
            {path: "home", component: HomeComponent},
             { path: '' , component: HeaderComponent, outlet: 'header'},
             { path: '' , component: FooterComponent, outlet: 'footer'} ,   
             { path: '' , component: SideNavComponent, outlet: 'navbar'} 
                       
        ])
    ],
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, NotFoundComponent, Reverseletters,
    PersonComponent,TableComponent,TypographyComponent,IconComponent,NotificationComponent,
    HeaderComponent,FooterComponent,SideNavComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}