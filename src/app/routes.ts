import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { DraftHistoryComponent } from './draft-history/draft-history.component';

export const ROUTES: Routes = [
    { path: 'history', component: HistoryComponent },
    { path: '', component: HomeComponent },
    { path: 'drafthistory', component: DraftHistoryComponent }
];
