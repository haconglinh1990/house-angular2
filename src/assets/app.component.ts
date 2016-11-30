import {Component, OnInit} from "@angular/core";
import {SearchService} from "../app/helper/SearchService";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

})


export class AppComponent implements OnInit{
  listFilter: string ="";

  constructor(private _searchService: SearchService){
  }

  ngOnInit(): void {
  }

  onChange(newValue): void {
    this._searchService.setFilterKeyWord(newValue);
  }
}
