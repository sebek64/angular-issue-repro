import {Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: "app-displayer",
  templateUrl: "./displayer.component.html"
})
export class DisplayerComponent implements OnChanges {
  @Input()
  value: string;

  ngOnChanges() {
    console.log("displayer onchanges", this.value);
  }
}
