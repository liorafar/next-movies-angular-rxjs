import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-next-movies',
  templateUrl: './next-movies.component.html',
  styleUrls: ['./next-movies.component.scss']
})
export class NextMoviesComponent implements OnInit {

  movies:Movie[];
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(items => this.movies = items);
  }

  onClickMovie(movie:any): void {
    console.log("recieved movie: ", movie);
  }

}
