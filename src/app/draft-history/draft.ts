export class Draft {
    draftYear: string;
    rounds: Round[];
}

export class Round {
    roundNum: number;
    picks: Pick[];
}

export class Pick {
    Drafter: string;
    OverallRank: string;
    Pick: string;
    Player: string;
    Position: string;
    PositionRank: string;
    round: string;
}
