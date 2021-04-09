import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Baitap';

  isFinish = '';

  // tslint:disable-next-line:typedef
  finishCountdown() {
    this.isFinish = 'Ket thuc';
  }
}
