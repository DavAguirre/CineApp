import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  

  {
    path: 'movie/:id',
    loadChildren: () => import('./pages/movie/movie.module').then( m => m.MoviePageModule)
  },
  //{
   // path: 'movie-page',
   // loadChildren: () => import('./pages/movie/movie.module').then( m => m.MoviePageModule)
  //}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
