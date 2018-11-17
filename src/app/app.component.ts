import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;

  OnChangeCount(count: number) {
    this.count = count;
  }
}
