import { Component, OnInit } from '@angular/core';
import {ApiCallHelper} from "../../../helper/ApiCallHelper";
import {IProject} from "../model/Project";
import {API} from "../../../config/API";
import {ProjectService} from "../services/project.service";
import {SearchService} from "../../../helper/SearchService";

@Component({
  selector: 'app-project',
  templateUrl: '../view/project.component.html',
  styleUrls: ['../assets/project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  listFilter: string;
  projects: Array<IProject>;
  projectsPart1: Array<IProject>;
  projectsPart2: Array<IProject>;
  projectsPart3: Array<IProject>;
  numberSplice: number;
  errorMessage: string;

  constructor(private _fbsv: ProjectService, private _apiHelper : ApiCallHelper, private _searchService: SearchService) {

  }

  ngOnInit(){

    this._searchService.getFilterKeyWord().subscribe( (listFilter: string) => {
      this.listFilter = listFilter;
      });

    //this.getProjectsFromLocalJson();
    this.getProjectsFromFirebase();
  }

  getProjectsFromFirebase(){
    this._fbsv.getProjects().subscribe(
        projects => {

          this.projects = projects;
          this.numberSplice = Math.round(projects.length/4) - 1;
          this.spliceArray();

          console.log(projects);

          console.log(this.numberSplice + " : "
              + this.projectsPart1.length + " : "
              + this.projectsPart2.length + " : "
              + this.projectsPart3.length + " : "
              + this.projects.length);
        },
        error => this.errorMessage = <any>error
    );
  }


  spliceArray(){
    this.projectsPart1 = this.projects.splice(0, this.numberSplice +1);
    this.projectsPart2 = this.projects.splice(0, this.numberSplice +1);
    this.projectsPart3 = this.projects.splice(0, this.numberSplice);
  }

}
