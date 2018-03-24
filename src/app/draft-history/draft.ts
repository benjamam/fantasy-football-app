export class Draft {
    draftYear: string;
    rounds: Round[];
}

export class Round {
    roundNum: number;
    picks: Pick[];
}

export class Pick {
    pickNum: number;
    name: string;
}
