import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies:Movie[];
  
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    // this.movieService.getMovies().subscribe(items => this.movies = items);
    this.movieService.getMovies().subscribe({
      next: result => this.movies = result,
      complete: () => console.log('done')
     });
  }

}
