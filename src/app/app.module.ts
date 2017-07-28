import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule }    from '@angular/forms';

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

@NgModule({
    imports: [BrowserModule,FormsModule, AppRoutingModule
    ],
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, NotFoundComponent, Reverseletters,
    PersonComponent,TableComponent,TypographyComponent,IconComponent,NotificationComponent,
    HeaderComponent,FooterComponent,SideNavComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}