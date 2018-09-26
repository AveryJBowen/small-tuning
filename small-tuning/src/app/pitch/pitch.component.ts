import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pitch",
  templateUrl: "./pitch.component.html",
  styleUrls: ["./pitch.component.css"]
})
export class PitchComponent implements OnInit {
  pitch = 480;
  lowG = this.pitch * (7 / 8);
  bNote = this.pitch * (9 / 8);
  cNote = this.pitch * (5 / 4);
  dNote = this.pitch * (4 / 3);
  eNote = this.pitch * (3 / 2);
  fNote = this.pitch * (5 / 3);
  highG = this.pitch * (7 / 4);
  highA = this.pitch * 2;
  tenor = this.pitch * (1 / 2);
  bass = this.pitch * (1 / 4);

  constructor() {}

  ngOnInit() {}
}
