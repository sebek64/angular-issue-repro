import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  value?: string;

  constructor(private readonly cd: ChangeDetectorRef) {
    console.log("app constructor");
  }

  ngOnInit() {
    console.log("app oninit", this.value);
  }

  ngAfterViewInit() {
    console.log("app afterviewinit", this.value);
  }

  valueChangeHandler(v: string) {
    this.value = v;
    console.log("valueChangeHandler", v);
  }
}
