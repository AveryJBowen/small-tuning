import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Pitch } from "../pitch";

@Component({
  selector: "app-pitch",
  templateUrl: "./pitch.component.html",
  styleUrls: ["./pitch.component.css"]
})
export class PitchComponent implements OnChanges {
  @Input("pitchValue")
  pitchNum: number;
  pitch: Pitch;

  constructor() {}

  ngOnChanges() {
    this.pitch = new Pitch(this.pitchNum);
  }
}
