import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-film',
  templateUrl: './pagina-film.component.html',
  styleUrls: ['./pagina-film.component.scss']
})
export class PaginaFilmComponent implements OnInit {

  film = Film[]


  constructor() { }

  ngOnInit(): void {
    let d = document.querySelector('div')?.innerHTML
    d += this.film
  }

}


interface Film{
  title: string,
  durata:number,
  like:boolean
}
