import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  fetchRandomJoke() {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }
}
