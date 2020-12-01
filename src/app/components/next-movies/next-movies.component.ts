import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../../services/movie.service'
import Autocomplete from "@trevoreyre/autocomplete-js";

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
  searchTextFilter:Function;
  runtimeFilter:Function;
  ratingFilter:Function;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(items => this.movies = items);
    this.createFilters();
    this.initSearchComponent();
  }

  createFilters():any {
    this.searchTextFilter = (movie, searchText) =>
                              movie.title.toLowerCase()
                              .includes(searchText.toLowerCase())
                              ||
                              movie.synopsis.toLowerCase()
                              .includes(searchText.toLowerCase())
  }

  initSearchComponent() {
    const search = searchText => {
      const searchTextFilter = movie =>
                                movie.title.toLowerCase()
                                .includes(searchText.toLowerCase())
                                ||
                                movie.synopsis.toLowerCase()
                                .includes(searchText.toLowerCase())
      const filters = [searchTextFilter];
      this.movieService.getMoviesByCriteria(filters).then(filteredRes => this.movies = filteredRes);;
      return [];
    }

    new Autocomplete("#autocomplete",
     {
        search,
        debounceTime: 500
     })
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

  filtersApplied() {

  }

}
