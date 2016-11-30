import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "../assets/app.component";
import {ApiCallHelper} from "./helper/ApiCallHelper";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./layout/home/home.component";
import {ProjectComponent} from "./modules/ProjectModule/controller/project.component";
import {ProjectModule} from "./modules/ProjectModule/project.module";
import {MaterialModule} from "@angular/material";
import {API} from "./config/API";
import {SearchService} from "./helper/SearchService";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
  providers: [API, ApiCallHelper, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
