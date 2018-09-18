import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
