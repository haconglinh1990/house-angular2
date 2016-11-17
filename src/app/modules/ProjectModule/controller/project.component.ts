import { Component, OnInit } from '@angular/core';
import {ApiCallHelper} from "../../../helper/ApiCallHelper";
import {IProject} from "../model/Project";
import {Config} from "../../../config/config";

@Component({
  selector: 'app-project',
  templateUrl: '../view/project.component.html',
  styleUrls: ['../assets/project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: IProject[];
  numberProject: number;
  errorMessage: string;


  constructor(private _config: Config, private _apiHelper : ApiCallHelper) {

  }

  ngOnInit(){
    this.getProjectsFromApi();
  }

  getProjectsFromApi(){
    //get service of user
    let url = this._config.get('projects');

    console.log(url);

    this._apiHelper.get(url)
      .subscribe(
        data => {
          //parse data from service -> bind users

          this.projects = data.json().result.projects;
          this.numberProject = data.json().result.totalResults;
        },
        error => this.errorMessage = <any>error
      );
  }




}
