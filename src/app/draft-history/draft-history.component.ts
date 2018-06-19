import { Component, OnInit } from '@angular/core';
import { Draft, Round, Pick } from './draft';
import { ApiServiceService } from '../services/api-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-draft-history',
  templateUrl: './draft-history.component.html',
  providers: [ApiServiceService],
  styleUrls: ['./draft-history.component.css']
})
export class DraftHistoryComponent implements OnInit {

  draft: Observable<Draft>;
  round: Observable<any>;
  year: string;
  roundNum: string;

  constructor(private apiService: ApiServiceService) {
    this.year = '';
  }

  ngOnInit() {
  }

  onYearChange(event, newYear) {
    this.year = newYear;

  }
  getDraft() {
    console.log('year', this.year);
    this.draft = <Observable<Draft>>this.apiService.getDraft(this.year);
    this.draft.forEach(v => console.log(v));
  }

  // getDraft(year: number) {
  //   this.draft = this.apiService.getDraft(year);
  // }

  getRound() {
    this.round = this.apiService.getRound(this.year, this.roundNum);
  }
}

