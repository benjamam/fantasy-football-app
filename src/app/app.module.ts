import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DraftHistoryComponent } from './draft-history/draft-history.component';
import { DraftComponent } from './draft-history/draft/draft.component';
import { HistoryComponent } from './history/history.component';

import { RouterModule, Routes, Router } from '@angular/router';
import { DraftEntryComponent } from './admin/draft-entry/draft-entry.component';

import { ROUTES } from './routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DraftHistoryComponent,
    DraftComponent,
    HistoryComponent,
    DraftEntryComponent
  ],
  imports: [
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: false } // debugging
    ),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})



export class AppModule { }
