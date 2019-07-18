import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input()
  joke: Joke;

  constructor() { }

  ngOnInit() {
  }

}
