import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactEditComponent} from './components/contact-edit/contact-edit.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactStateService} from "./services/contact-state.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactEditComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
