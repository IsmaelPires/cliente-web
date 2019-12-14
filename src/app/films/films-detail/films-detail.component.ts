import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Films } from '../films';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit {

  films: Films;
  idFilm: string;

  constructor(private route: ActivatedRoute,
    private service: FilmsService
  ) { }

  ngOnInit() {
    this.getById()
  }

  getById() {
    this.idFilm = this.route.snapshot.params.id;
    this.service.getById(Number(this.idFilm)).subscribe(resultado => {
      this.films = resultado;
      console.log(resultado);
      console.log(this.films);
    });
    console.log(this.route.snapshot.params.id);
  }
}