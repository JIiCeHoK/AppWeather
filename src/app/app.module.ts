import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
    declarations: [
        AppComponent,
        SideMenuComponent,
        CityCardComponent
    ],
    imports: [
        BrowserModule, HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
