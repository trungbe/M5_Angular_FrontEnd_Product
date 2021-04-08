import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  // tslint:disable-next-line:typedef
  get second() {
    return this.times;
  }

  set second(value) {
    const v = Number(value);
    this.times = Number.isNaN(v) ? 15 : v;
  }

  constructor() {
  }

  @Input('time')

  times = 10;
  startTime: any;

  @Output()
  finish = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  start() {
    this.startTime = setInterval(() => {
      this.times--;
      this.isCountDownFinish();
      console.log(this.times);
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  stop() {
    this.clearTimer();
    clearInterval(this.startTime);
  }

  // tslint:disable-next-line:typedef
  clearTimer() {
    clearInterval(this.times);
  }

  // tslint:disable-next-line:typedef
  reset() {
    // this.clearTimer();
    // this.startTime = this.second;
    this.times = 10;
  }

  // tslint:disable-next-line:typedef
  isCountDownFinish() {
    // this.clearTimer();
    if (this.times === 0) {
      this.stop();
      this.finish.emit(true);
    }
  }
}

