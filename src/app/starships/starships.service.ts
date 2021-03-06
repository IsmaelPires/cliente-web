import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Starships } from './starships';
import { IGenericOperations } from '../generic/igeneric-operation';
import { Observable } from 'rxjs';
import { IGenericResource } from '../generic/igeneric-resource';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService implements IGenericOperations<Starships, number> {

  endpoint = environment.URL_API+"starships";

  constructor(private http : HttpClient) {
    console.log("Injeção de dependência HttpClient");
   }
  
  post(data: Starships) {
    console.log("Entrou dentro do serviço StarshipsService - método POST");
    this.http.post(this.endpoint,data);
  }
  put(id? : number, data?: Starships) {
    console.log("Entrou dentro do serviço StarshipsService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  patch(id? : number, data?: Starships) {
    console.log("Entrou dentro do serviço StarshipsService - método PUT");
    this.http.put(this.endpoint+"/"+id, data);
  }
  get(): Observable<IGenericResource<Starships>> {
    console.log("Entrou dentro do serviço StarshipsService - método GET");
    return this.http.get<IGenericResource<Starships>>(this.endpoint);
  }
  getById(id?: number): Observable<Starships> {
    console.log("Entrou dentro do serviço StarshipsService - método GET/:ID");
    return this.http.get<Starships>(this.endpoint+"/"+id);
  }
  delete(id?: number) {
    console.log("Entrou dentro do serviço StarshipsService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
  }
}
