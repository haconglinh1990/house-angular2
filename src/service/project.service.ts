/**
 * Created by haconglinh on 11/11/16.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {IProject} from "../model/Project";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {IProjectDetail} from "../model/ProjectDetail";


@Injectable()
export class ProjectService{
  private _projectUrl = 'api/project/project.json';
  private _projectDetailUrl = 'api/project/projectDetail.json';

  constructor(private _http: Http){

  }

  getProjects():Observable<IProject[]>{

    return this._http.get(this._projectUrl)
      .map((response: Response) => <IProject[]> response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)));

  }



  getProjectDetail(id: number): Observable<IProjectDetail> {
    return this._http.get(this._projectDetailUrl)
      .map((response: Response) => <IProjectDetail> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
