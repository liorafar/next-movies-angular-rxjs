import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiltersDataService } from "../../services/filters-data.service";


@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Output() clicked:EventEmitter<void> = new EventEmitter();

  rating:number;
  runtime:number;
  constructor(private filtersDataService:FiltersDataService) { }

  ngOnInit(): void {
  }

  closePanel(){
    this.clicked.emit();
  }
  // to do: change regular range input to "between" range
  // so we can provide a range of 5-8 for example and not only 0-8
  applyFilters(){
    console.log("applyFilters");
      const ratingEl: HTMLInputElement = document.getElementById('ratingEl') as HTMLInputElement
      const runtimeEl: HTMLInputElement = document.getElementById('runtimeEl') as HTMLInputElement
      this.rating = parseInt(ratingEl.value);
      this.runtime = parseInt(runtimeEl.value);
      this.filtersDataService.updatedDataSelection({ rating: this.rating, runtime: this.runtime })
  }
  clearFilters(){
    const ratingEl: HTMLInputElement = document.getElementById('ratingEl') as HTMLInputElement
    const runtimeEl: HTMLInputElement = document.getElementById('runtimeEl') as HTMLInputElement
    ratingEl.value = "10";
    runtimeEl.value = "240";
    this.rating = parseInt(ratingEl.value);
    this.runtime = parseInt(runtimeEl.value);
    this.filtersDataService.updatedDataSelection({ rating: this.rating, runtime: this.runtime })
  }

}
