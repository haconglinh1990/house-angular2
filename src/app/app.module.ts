import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {ProjectService} from "../service/project.service";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {ProjectComponent} from "./project/project.component";
import {ProjectdetailComponent} from "./projectdetail/projectdetail.component";
import { HeaderComponent } from './header/header.component';
import {ProjectModule} from "./project/project.module";
import {MaterialModule} from "@angular/material";

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
        {path: 'projectdetail/:id', component: ProjectdetailComponent},
        { path: '', redirectTo: 'projects', pathMatch: 'full' },
        { path: '**', redirectTo: 'projects', pathMatch: 'full' }
      ]
    ),
    ProjectModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
