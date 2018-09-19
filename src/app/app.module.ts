import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {MaterialModule} from './material.module';
import {AddMovieComponent} from './dialogs/add-movie/add-movie.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {YesNoComponent} from './dialogs/yes-no/yes-no.component';
import {EditDialogComponent} from './dialogs/edit-dialog/edit-dialog.component';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    AddMovieComponent,
    YesNoComponent,
    EditDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [ApiService],
  entryComponents: [AddMovieComponent, YesNoComponent, EditDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
