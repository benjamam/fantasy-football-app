import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DraftHistoryComponent } from './draft-history/draft-history.component';
import { DraftComponent } from './draft-history/draft/draft.component';
import { HistoryComponent } from './history/history.component';

import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: '', component: HomeComponent},
  { path: 'drafthistory', component: DraftHistoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DraftHistoryComponent,
    DraftComponent,
    HistoryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging
    ),
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})



export class AppModule { }
