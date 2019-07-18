import { JokeService } from './joke.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Joke } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
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
