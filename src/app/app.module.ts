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
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { CommonModule } from '@angular/common'; 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NextMoviesComponent,
    MovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    GenericButtonComponent,
    FilterPanelComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
