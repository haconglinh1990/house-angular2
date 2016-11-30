/**
 * Created by haconglinh on 11/28/16.
 */

import {  PipeTransform, Pipe } from '@angular/core';
import {IProject} from "../model/Project";

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(value: Array<IProject>, filterBy: string): Array<IProject> {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((project: IProject) =>
    project.nameProject.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
