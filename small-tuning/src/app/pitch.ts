export class Pitch {
  lowA: number;
  lowG: number;
  bNote: number;
  cNote: number;
  dNote: number;
  eNote: number;
  fNote: number;
  highG: number;
  highA: number;
  tenor: number;
  bass: number;
  constructor(public pitch: number) {
    this.lowA = pitch;
    this.lowG = this.lowA * (7 / 8);
    this.bNote = this.lowA * (9 / 8);
    this.cNote = this.lowA * (5 / 4);
    this.dNote = this.lowA * (4 / 3);
    this.eNote = this.lowA * (3 / 2);
    this.fNote = this.lowA * (5 / 3);
    this.highG = this.lowA * (7 / 4);
    this.highA = this.lowA * 2;
    this.tenor = this.lowA * (1 / 2);
    this.bass = this.lowA * (1 / 4);
  }
}
