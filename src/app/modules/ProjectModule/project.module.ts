import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './controller/project.component';
import {RouterModule} from "@angular/router";
import {ApiCallHelper} from "../../helper/ApiCallHelper";
import {MaterialModule} from "@angular/material";
import {ProjectDetailComponent} from "./controller/projectdetail.component";
import {AngularFireModule} from "angularfire2";
import {FirebaseConfig} from "../../config/Firebase";
import {ProjectFilterPipe} from "./services/projectFilterPipe";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    MaterialModule.forRoot(),

    RouterModule.forChild([
      { path: 'projects', component: ProjectComponent },
      { path: 'project/:id', component: ProjectDetailComponent}
    ])
  ],
  declarations: [ProjectComponent, ProjectDetailComponent, ProjectFilterPipe],
  providers:[ApiCallHelper]
})
export class ProjectModule { }
