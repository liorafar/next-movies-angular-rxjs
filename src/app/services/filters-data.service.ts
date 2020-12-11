import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FiltersData } from "../models/filtersData";

@Injectable({
  providedIn: 'root'
})
export class FiltersDataService {

  private dataSource = new BehaviorSubject(new FiltersData(10,240));
  data = this.dataSource.asObservable();

  constructor() { }

   updatedDataSelection(data: FiltersData){
    this.dataSource.next(data);
  }
}
