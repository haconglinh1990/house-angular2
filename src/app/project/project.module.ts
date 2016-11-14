import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {RouterModule} from "@angular/router";
import {ProjectService} from "../../service/project.service";
import {MaterialModule} from "@angular/material";
import {ProjectdetailComponent} from "../projectdetail/projectdetail.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: 'projects', component: ProjectComponent },
      { path: 'project-detail/:id', component: ProjectdetailComponent}
    ])
  ],
  declarations: [ProjectComponent, ProjectdetailComponent],
  providers:[ProjectService]
})
export class ProjectModule { }
