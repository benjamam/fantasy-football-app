import { Component, OnInit } from '@angular/core';
import { Draft, Round, Pick } from './draft';

@Component({
  selector: 'app-draft-history',
  templateUrl: './draft-history.component.html',
  styleUrls: ['./draft-history.component.css']
})
export class DraftHistoryComponent implements OnInit {
  pick1: Pick = {
    pickNum: 1,
    name: 'Antonio Brown'
  };
  pick2: Pick = {
    pickNum: 2,
    name: 'LeSean McCoy'
  };
  pick3: Pick = {
    pickNum: 3,
    name: 'Devonta Freeman'
  };
  pick4: Pick = {
    pickNum: 4,
    name: 'Julio Jones'
  };
  pick5: Pick = {
    pickNum: 5,
    name: 'Jordan Howard'
  };
  pick6: Pick = {
    pickNum: 6,
    name: 'Isaiah Crowell'
  };
  pick7: Pick = {
    pickNum: 7,
    name: 'Odell Beckham Jr.'
  };
  pick8: Pick = {
    pickNum: 8,
    name: 'Mike Evans'
  };
  pick9: Pick = {
    pickNum: 9,
    name: 'AJ Green'
  };
  pick10: Pick = {
    pickNum: 10,
    name: 'LeVeon Bell'
  };

  round1: Round = {
    roundNum: 1,
    picks: [this.pick1, this.pick2, this.pick3, this.pick4, this.pick5, this.pick6, this.pick7, this.pick8, this.pick9, this.pick10]
  };

  draft2017: Draft = {
    draftYear: '2017',
    rounds: [this.round1]
  };

  constructor() { }

  ngOnInit() {
  }



}

