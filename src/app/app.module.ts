import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RandomJokeComponent } from './components/random-joke/random-joke.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokePageComponent } from './pages/joke-page/joke-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    RandomJokeComponent,
    JokePageComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
