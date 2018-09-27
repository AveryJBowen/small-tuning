import { Component } from "@angular/core";
import { Pitch } from "../pitch";

@Component({
  selector: "app-pitch-form",
  templateUrl: "./pitch-form.component.html",
  styleUrls: ["./pitch-form.component.css"]
})
export class PitchFormComponent {
  model = new Pitch(480);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
