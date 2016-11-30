/**
 * Created by haconglinh on 11/29/16.
 */
import {Injectable} from '@angular/core';
import {Subject, Observable} from "rxjs";

@Injectable()
export class SearchService {
  private listFilter: string = "";
  private subject: Subject<string> = new Subject<string>();

  setFilterKeyWord(listFilter: string): void {
    this.listFilter = listFilter;
    this.subject.next(listFilter);
  }

  getFilterKeyWord(): Observable<string> {
    return this.subject.asObservable();
  }

}
