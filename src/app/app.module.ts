import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxbootstrapModule } from 'src/modules/ngxbootstrap/ngxbootstrap.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: './films/films.module#FilmsModule'
  }]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FilmsModule,
    PeopleModule,
    BrowserAnimationsModule,
    NgxbootstrapModule,
    SharedModuleModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
