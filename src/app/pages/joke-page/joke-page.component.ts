import { JokeService } from 'src/app/joke.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/joke';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {
  joke$: Observable<Joke>;

  constructor(
    private jokeService: JokeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.joke$ = this.route.paramMap.pipe(
      map(params => params.get('category')),
      switchMap(category =>
        this.jokeService.fetchJokeByCategory(category)
      )
    );
  }
}
