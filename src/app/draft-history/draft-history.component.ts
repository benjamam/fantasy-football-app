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

  draft: Observable<any>;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  }

  getDraft() {
    this.draft = this.apiService.getDraft(2017);
  }

}

