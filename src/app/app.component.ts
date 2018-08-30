import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3-formWS';
  childdata="";
  number=0;
  onClicked(value: string) {
    this.childdata=value;
    this.number++;
  }
}
