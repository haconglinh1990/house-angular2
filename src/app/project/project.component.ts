import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {IProject} from "../../model/Project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: IProject[];
  errorMessage: string;


  constructor(private _projectService: ProjectService) {

  }

  ngOnInit(): void {
    this._projectService.getProjects().subscribe(
      projects => this.projects = projects, error => this.errorMessage = <any>error
    );
  }

}
