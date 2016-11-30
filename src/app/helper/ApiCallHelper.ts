/**
 * Created by haconglinh on 11/11/16.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {Router} from "@angular/router";


@Injectable()
export class ApiCallHelper{

  constructor(private _http: Http, private _router:Router){

  }

  public get(url : string):Observable<Response>{

    return this._http.get(url)
      .catch((error) => {
        this._checkResponse(error);
        return Observable.throw(error);
      })
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  _checkResponse(error:any) {
    switch (error.status) {
      case 419:
        alert('Your session expired! Please log in again!');
        //this.auth.logout();
        this._router.navigate(['Login']);
        break;
    }
  }
}
