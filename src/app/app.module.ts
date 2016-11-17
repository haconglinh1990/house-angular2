import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from '../assets/app.component';
import { FooterComponent } from './layout/basic/footer/footer.component';
import {ApiCallHelper} from "./helper/ApiCallHelper";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './layout/home/home.component';
import {ProjectComponent} from "./modules/ProjectModule/controller/project.component";
import { HeaderComponent } from './layout/basic/header/header.component';
import {ProjectModule} from "./modules/ProjectModule/project.module";
import {MaterialModule} from "@angular/material";
import {Config} from "./config/config";
import {ProjectDetailComponent} from "./modules/ProjectModule/controller/projectdetail.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(
      [
        {path: 'home', component: HomeComponent},
        {path: 'projects', component: ProjectComponent},
        { path: '', redirectTo: 'projects', pathMatch: 'full' },
        { path: '**', redirectTo: 'projects', pathMatch: 'full' }
      ]
    ),
    ProjectModule
  ],
  providers: [Config, ApiCallHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
