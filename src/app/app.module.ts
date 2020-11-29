import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextMoviesComponent } from './components/next-movies/next-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GenericButtonComponent } from './components/basicComponents/generic-button/generic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NextMoviesComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    GenericButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
