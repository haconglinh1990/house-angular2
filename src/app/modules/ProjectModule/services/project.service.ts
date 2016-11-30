import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {IProject} from "../model/Project";


@Injectable()
export class ProjectService{

    constructor(private _af: AngularFire, private _router:Router){

    }

    getProjects(): FirebaseListObservable<Array<IProject>>{
        return this._af.database.list('/projects') as FirebaseListObservable<Array<IProject>>;
    }

    // getProjectDetail(idProject: number): FirebaseListObservable<IProjectDetail>{
    //     return this._af.database.object('/project/' + idProject) as FirebaseListObservable<IProjectDetail>;
    // }
    //
}
