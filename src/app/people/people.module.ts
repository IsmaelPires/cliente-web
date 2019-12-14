import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleListComponent,
    data: {
      title: 'Heroes List'
    }
  }
]
@NgModule({
  declarations: [PeopleListComponent],
  imports: [
    CommonModule, GenericModule, HttpClientModule, RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [PeopleListComponent]
})
export class PeopleModule { }
