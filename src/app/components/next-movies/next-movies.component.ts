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
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(items => this.movies = items);
    this.initSearchComponent();
  }

  initSearchComponent() {
    // const autoCompleteElem = document.getElementById("autocomplete");
    const search = searchText => {
      console.log("input: ", searchText);
      const filters = [movie => movie.title.toLowerCase().includes(searchText.toLowerCase())];
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
    console.log("recieved movie: ", movie);
    this.movieGotClicked = true;
    this.selectedMovie = movie;
  }

  onGoBackClicked(): void {
    this.movieGotClicked = false;
  }

}
