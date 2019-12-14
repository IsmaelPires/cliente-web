import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../films.service';
import { Films } from '../films';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit {

  films: Films;
  filmId: number;

  constructor(private service: FilmsService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getById() {
    this.filmId = Number(this.route.snapshot.params.id);
    this.service.getById(this.filmId).subscribe(resultado => this.films = resultado);
  }
}
