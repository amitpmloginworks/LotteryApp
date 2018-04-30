import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { HomeService } from '../../services/service.home';

@IonicPage()
@Component({
  selector: 'page-blog-elmentdetail',
  templateUrl: 'blog-elmentdetail.html',
})
export class BlogElmentdetailPage {
  dataFromAPI: any;
  decodedHtml: string;
  EventData: any;
  blogData: any;
  apiCall: any;
  blogDetailImage: any;
  displayDetailImage: any;
  done: boolean;
  blogDetail: any;
  tabbarElement: any;
  constructor(public navCtrl: NavController,
    private srvHome: HomeService,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController
  ) {
       
    this.tabbarElement = document.querySelector('.tabbar');
    //data
    this.blogData = this.navParams.get("blogDetail")
    // this.EventData = this.navParams.get("event")

    this.apiCall = this.navParams.get("APIcall");
    if (this.apiCall == "blog") {
      this.callAPItoGetDetails(this.apiCall, this.blogData.ID)
    }
    else {
      this.callAPItoGetDetails(this.apiCall, this.blogData.event_id)
    }
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.done = true
    }, 2000);
    console.log('ionViewDidLoad BlogElmentdetailPage');
  }
  ionViewWillEnter() {
    this.tabbarElement.style.display = 'none';
  }
  ionViewWillLeave() {
    this.tabbarElement.style.display = 'flex';
  }
  closeBlogClick() {
    this.viewCtrl.dismiss();
    this.tabbarElement.style.display = 'flex';
  }
  callAPItoGetDetails(APIcallText, id) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
    });
    loading.present().then(() => {
      console.log('ionViewDidLoad PlayGamePage');
      this.displayDetailImage = this.blogData.image ? this.blogData.image : this.blogData.image_url
      if (APIcallText == "blog") {
        this.srvHome.getBlogDetails(id).subscribe(data => {
          if (data) {
                
            loading.dismiss()
            this.dataFromAPI = data.response[0].get_blog_contents.response.content
            if (this.dataFromAPI) {
              this.decodeHtmlEntity(this.dataFromAPI)
            }
          }
          else {
            loading.dismiss()
          }
        })
      }
      else if (APIcallText == "event") {
        this.srvHome.getEventDetails(id).subscribe(data => {
          if (data) {
                
            loading.dismiss()
            this.dataFromAPI = data.response[0].get_event_contents.response.content
            if (this.dataFromAPI) {
              this.decodeHtmlEntity(this.dataFromAPI)
            }
            else {
              loading.dismiss()
            }
          }
        })
      }
    })

  }

  decodeHtmlEntity(dataCode) {
    var sampleTxt = document.createElement("textarea");
    sampleTxt.innerHTML = dataCode
    this.decodedHtml = sampleTxt.value;
  }
}
