import { JokePageComponent } from './pages/joke-page/joke-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'joke/:category', component: JokePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }