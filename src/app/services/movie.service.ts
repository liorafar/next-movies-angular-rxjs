import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie'
import { Observable } from 'rxjs';
//////////////////
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
////////////////////

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesUrl:string = 'http://localhost:3000/movies';
  
  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);

    // rxjs way
    // return fromFetch(this.moviesUrl).pipe(
    //                   switchMap(response => {
    //                       if (response.ok) {
    //                         // OK return data
    //                         return response.json();
    //                       } else {
    //                         // Server is returning a status requiring the client to try something else.
    //                         return of({ error: true, message: `Error ${response.status}` });
    //                       }
    //                     }),
    //                     catchError(err => {
    //                       // Network or other error, handle appropriately
    //                       console.error(err);
    //                       return of({ error: true, message: err.message })
    //                     })
    //                   );
 

  }
}
