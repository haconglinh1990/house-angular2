import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../service/project.service";
import {IProjectDetail} from "../../model/ProjectDetail";

@Component({
  selector: 'app-projectdetail',
  templateUrl: 'projectdetail.component.html',
  styleUrls: ['projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit, OnDestroy{

  errorMessage: string;
  project: IProjectDetail;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProject(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProject(id: number) {
    this._projectService.getProjectDetail(id).subscribe(
      project => this.project = project,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }


}
