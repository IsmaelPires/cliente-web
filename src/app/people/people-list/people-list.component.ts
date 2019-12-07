import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
​
import { PeopleService } from '../people.service';
import {People} from '../people'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[];

  constructor(private service : PeopleService) { }

  ngOnInit() {
    this.getAll();
  }
​
  //Método que vai assinar (subscribe) a consulta
  //quando houver resultado os dados serao armazenas num array
  getAll(){
    this.service.get().subscribe(
      resultado => this.people = resultado.results,
      error => /* Tratamos erros aqui :) */console.log(error));
  }

}
