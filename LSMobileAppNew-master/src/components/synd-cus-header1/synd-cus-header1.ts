import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'synd-cus-header1',
  templateUrl: 'synd-cus-header1.html'
})
export class SyndCusHeader1Component {
  @Input('title') title;
  @Input('notification-count') notificationCount;
  text: string;
  constructor(private navCtrl: NavController) {
    console.log('Hello CusHeader Component');
  }
  close() {
    this.navCtrl.pop();
  }
  ngAfterViewInit() {
  }

}
