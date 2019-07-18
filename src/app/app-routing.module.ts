import { JokePageComponent } from './pages/joke-page/joke-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeResolverService } from './joke-resolver.service';
import { CanISeeJokeService } from './can-i-see-joke.service';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  {
    path: 'joke/:category',
    component: JokePageComponent,
    resolve: {
      joke: JokeResolverService,
    },
    canActivate: [
      CanISeeJokeService
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
