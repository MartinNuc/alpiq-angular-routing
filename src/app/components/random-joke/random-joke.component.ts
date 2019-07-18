import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Joke } from 'src/app/joke';
import { JokeService } from 'src/app/joke.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit, AfterViewInit {

  joke$: Observable<Joke>;

  reload$ = new Subject();

  constructor(public jokeService: JokeService) {}

  ngOnInit() {
    this.joke$ = this.reload$.pipe(
      switchMap(() => this.jokeService.fetchRandomJoke())
    );
  }

  ngAfterViewInit() {
    this.reload();
  }

  reload() {
    this.reload$.next();
  }

}
