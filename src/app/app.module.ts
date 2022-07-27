import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './student/navbar/navbar.component';
import { HomepageComponent } from './student/homepage/homepage.component';
import { FindAllComponent } from './student/find-all/find-all.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateComponent } from './student/create/create.component';
import { EditComponent } from './student/edit/edit.component';
import { DetailComponent } from './student/detail/detail.component';
import { DeleteComponent } from './student/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FindAllComponent,
    CreateComponent,
    EditComponent,
    DetailComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
