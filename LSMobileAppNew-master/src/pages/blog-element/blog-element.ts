import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';


@IonicPage()
@Component({
  selector: 'page-blog-element',
  templateUrl: 'blog-element.html',
})
export class BlogElementPage {

  currentDate: number;
  currentMonth: string;
  currentweekday: any;
  profileImage: string = "";
  showImage: boolean = false;
  done: boolean;
  millionerImage: any;
  homeBlog: any;
     

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams,
    public modalCtrlr: ModalController,
    public appSound: AppSoundProvider, ) {
    this.homeBlog = this.navParams.get("homeBlog")
    this.millionerImage = this.navParams.get("millionerImage")

  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`
    })
    loader.present();
    setTimeout(() => {
      this.done = true
      loader.dismiss()
    }, 2000);
       

    var currentDate = new Date();
    var locale = "en-us";
    this.currentMonth = currentDate.toLocaleString(locale, { month: "long" });
    //get Full Day Name
    var weekday = new Array(7);
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[7] = "Sunday";
    var dayIndex = currentDate.getDay();
    this.currentweekday = weekday[dayIndex];
    this.currentDate = currentDate.getDate()


    if (localStorage.getItem("profileImage") !== undefined && localStorage.getItem("profileImage") !== null && localStorage.getItem("profileImage") !== "") {
      this.profileImage = localStorage.getItem("profileImage");
      this.showImage = true;
    }
  }

  goElementDetails(item: any, pageAPI: any) {
    this.navCtrl.push('BlogElmentdetailPage', { blogDetail: item, APIcall: pageAPI })
  }
  mgmOpenPage() {
    this.appSound.play('buttonClick');
    this.navCtrl.push('referFriend');

  }
  closeBlogClick() {
    console.log("clicked")
    this.navCtrl.pop();
  }
}
