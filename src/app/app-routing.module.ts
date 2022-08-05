import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaFilmComponent } from './pagina-film/pagina-film.component';
import { PaginaProfiloComponent } from './pagina-profilo/pagina-profilo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pagina-profilo',
    component: PaginaProfiloComponent
  },
  {
    path: 'pagina-film',
    component: PaginaFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
