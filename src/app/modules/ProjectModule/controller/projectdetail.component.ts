import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {IProjectDetail} from "../model/ProjectDetail";
import {API} from "../../../config/API";
import {ApiCallHelper} from "../../../helper/ApiCallHelper";

@Component({
  selector: 'app-projectdetail',
  templateUrl: '../view/projectdetail.component.html',
  styleUrls: ['../assets/projectdetail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  }

  errorMessage: string;
  projectDetail: IProjectDetail;
  listUrlImage: Array<string>;

  private sub: Subscription;

  constructor(private _config: API,
              private _apiHelper : ApiCallHelper,
              private _router: Router,
              private _route: ActivatedRoute){

  }


  ngOnInit(): void {
    this.projectDetail = <IProjectDetail>{};
    this.listUrlImage = new Array<string>();
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
          this.listUrlImage = data.json().result.listUrlImage;

          //console.log(this.projectDetail.listUrlImage);
          // this.nameTest = this.projectDetail.nameProject;

        },
        error => this.errorMessage = <any>error
      );
  }







}
