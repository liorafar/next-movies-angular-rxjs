import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies:Movie[];
  @Output() clicked: EventEmitter<Movie> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  movieClicked(movie:Movie): void {
    this.clicked.emit(movie);
  }

}
