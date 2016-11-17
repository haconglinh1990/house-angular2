import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './controller/project.component';
import {RouterModule} from "@angular/router";
import {ApiCallHelper} from "../../helper/ApiCallHelper";
import {MaterialModule} from "@angular/material";
import {ProjectDetailComponent} from "./controller/projectdetail.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: 'projects', component: ProjectComponent },
      { path: 'project/:id', component: ProjectDetailComponent}
    ])
  ],
  declarations: [ProjectComponent, ProjectDetailComponent],
  providers:[ApiCallHelper]
})
export class ProjectModule { }
