import { JokeService } from './joke.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Joke } from './joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeResolverService implements Resolve<Joke> {
  constructor(private jokeService: JokeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Joke | Observable<Joke> | Promise<Joke> {
    const category = route.paramMap.get('category');
    return this.jokeService.fetchJokeByCategory(category);
  }
}
