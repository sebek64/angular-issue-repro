import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-emitter",
  templateUrl: "./emitter.component.html"
})
export class EmitterComponent {
  @Output()
  readonly valueChange = new EventEmitter<string>();

  ngOnInit(): void {
    console.log("emitter oninit");
    this.valueChange.emit("emitted value from ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log("emitter afterviewinit");
    this.valueChange.emit("emitted value from ngAfterViewInit");
  }
}
