import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'newArrow-Header',
  templateUrl: 'new-arrow-header.html'
})
export class NewArrowHeaderComponent {
  @Input('title') title;
  @Input('notification-count') notificationCount;

  constructor(private navCtrl: NavController) {
    console.log('Hello CusHeader Component');
  }
  close() {
       
    let check = localStorage.getItem("windowCall")
    if (check) {
      localStorage.removeItem("windowCall")
      window.history.back();
    }
    else {
      this.navCtrl.pop();
    }

  }
  ngAfterViewInit() {
  }

}
