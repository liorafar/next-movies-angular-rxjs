import { Injectable } from '@angular/core';
import { Movie } from '../models/movie'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesUrl:string = 'http://localhost:3000/movies';
  
  constructor() { }

  getMovies():Observable<Movie[]> {
    return this.fetch(this.moviesUrl);
  }

  getMovieById(id:string): Observable<Movie> {
    return this.fetch(`${this.moviesUrl}/${id}`);
  }

  async getMoviesByCriteria(filters:any[], pageSize:number): Promise<Movie[]>{
    let moviesRes;
    const p = this.getMovies().toPromise(); // we want to await so we change to promise
    await p.then((val) => {
      moviesRes = val;
    });

    let filteredRes:Movie[] = moviesRes;
    filters.forEach((filterFunc) => {
      filteredRes = filteredRes.filter(filterFunc);
    });
    return filteredRes.slice(0, pageSize + 1);
  }

  private fetch(url):Observable<any>{
    return fromFetch(url).pipe(
      switchMap(response => {
          if (response.ok) {
            // OK return data
            return response.json();
          } else {
            // Server is returning a status requiring the client to try something else.
            return of({ error: true, message: `Error ${response.status}` });
          }
        }),
        catchError(err => {
          // Network or other error, handle appropriately
          console.error(err);
          return of({ error: true, message: err.message })
        })
      );
  }
}
