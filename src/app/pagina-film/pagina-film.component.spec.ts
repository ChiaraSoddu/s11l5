import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFilmComponent } from './pagina-film.component';

describe('PaginaFilmComponent', () => {
  let component: PaginaFilmComponent;
  let fixture: ComponentFixture<PaginaFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
