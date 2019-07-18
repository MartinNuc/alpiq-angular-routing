import { JokeService } from './../../joke.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<string[]>;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.categories$ = this.jokeService.fetchCategories();
  }
}
