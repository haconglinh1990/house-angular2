import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {IProjectDetail} from "../model/ProjectDetail";
import {Config} from "../../../config/config";
import {ApiCallHelper} from "../../../helper/ApiCallHelper";

@Component({
  selector: 'app-projectdetail',
  templateUrl: '../view/projectdetail.component.html',
  styleUrls: ['../assets/projectdetail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy{

  errorMessage: string;
  projectDetail: IProjectDetail;

  nameTest: string = "Ha Cong Linh";
  private sub: Subscription;

  constructor(private _config: Config,
              private _apiHelper : ApiCallHelper,
              private _router: Router,
              private _route: ActivatedRoute){

  }


  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProjectDetailFromApi(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  onBack(): void {
    this._router.navigate(['/projects']);
  }


  getProjectDetailFromApi(id: number){
    //get service of user
    let url = this._config.get('project_detail');
    //url = url+id;

    console.log(url);
    this._apiHelper.get(url)
      .subscribe(
        data => {
          //parse data from service -> bind users

          this.projectDetail=data.json().result;

          console.log(this.projectDetail.nameProject);
          // this.nameTest = this.projectDetail.nameProject;

        },
        error => this.errorMessage = <any>error
      );
  }







}
