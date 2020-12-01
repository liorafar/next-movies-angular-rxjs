import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie:Movie;
  loadingImage:boolean = false;
  @Input() id:string;
  @Output() goBackClicked:EventEmitter<void>= new EventEmitter();

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieById(this.id).subscribe(item => {
      this.loadingImage = true;
      this.movie = item[0]
    });
  }

  goBackOnClick(): void {
    this.goBackClicked.emit();
  }

}
