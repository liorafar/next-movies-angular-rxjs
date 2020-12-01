import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../../services/movie.service'
import Autocomplete from "@trevoreyre/autocomplete-js";
import { TimeFormatter } from "../../utils/timeFormatter";

@Component({
  selector: 'app-next-movies',
  templateUrl: './next-movies.component.html',
  styleUrls: ['./next-movies.component.scss']
})
export class NextMoviesComponent implements OnInit {

  movies:Movie[];
  movieGotClicked:boolean = false;
  selectedMovie:Movie;
  showAdvancedFilter:boolean = false;
  searchText:string = "";
  runtime:number = 240;
  rating:number = 10;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(items => this.movies = items);
    this.initSearchComponent();
  }

  initSearchComponent() {
    const search = searchText => {
      if (this.searchText === searchText) return [];
      this.searchText = searchText;
      this.getMoviesByCriterias();
      return [];
    }

    new Autocomplete("#autocomplete",
     {
        search,
        debounceTime: 500
     })
  }

  advancedFiltersApplied(data) {
    this.runtime = data.runtime;
    this.rating = data.rating;
    this.getMoviesByCriterias();
  }

  getAllFilters(searchText:string, runtime:number, rating:number):Array<Function> {
    const searchTextFilter = movie => 
      movie.title.toLowerCase()
      .includes(searchText.toLowerCase())
      ||
      movie.synopsis.toLowerCase()
      .includes(searchText.toLowerCase())

    const runtimeFilter = movie =>
      !movie.runtime ? true
      :
      new TimeFormatter().formatTimeToMinutes(movie.runtime) >= 0
      &&
      new TimeFormatter().formatTimeToMinutes(movie.runtime) <= runtime;

    const ratingFilter = movie =>
      !movie.rating ? true
      :
      movie.rating >= 0
      &&
      movie.rating <= rating;

      return [
        searchTextFilter,
        runtimeFilter,
        ratingFilter
      ];
  }

  getMoviesByCriterias():void {
    const filters = this.getAllFilters(this.searchText, this.runtime, this.rating);
    this.movieService.getMoviesByCriteria(filters).then(filteredRes => this.movies = filteredRes);
  }

  onClickMovie(movie:any): void {
    this.movieGotClicked = true;
    this.selectedMovie = movie;
  }

  onGoBackClicked(): void {
    this.movieGotClicked = false;
  }

  closeAdvancedPanel() {
    this.showAdvancedFilter = false;
  }

  advancedClicked():void{
    this.showAdvancedFilter = !this.showAdvancedFilter;
  }

  
}
