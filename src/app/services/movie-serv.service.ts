import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { movieInterface } from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServService {

  private url: string = '';
  private apiKey: string = 'cffa49db';

  constructor(private http: HttpClient) { }

  search(
    title: string,
    type: string,
    
  )

  {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<movieInterface>(this.url).pipe(map(results => results['Search']));
  }
  
  details(
    id: string
  )

  {
    return this.http.get<movieInterface>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }


}
