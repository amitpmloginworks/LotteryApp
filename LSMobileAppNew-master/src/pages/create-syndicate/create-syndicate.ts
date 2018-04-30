import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, LoadingController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SyndicateService } from '../../providers/syndicate-service';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';
import { File, FileEntry, } from '@ionic-native/file';
import { Camera, CameraOptions } from 'ionic-native';
import { ImagePicker } from '@ionic-native/image-picker';
import { Transfer, TransferObject } from '@ionic-native/transfer';
declare var window: any;
import { Observable, ObservableInput } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-create-syndicate',
  templateUrl: 'create-syndicate.html',
  providers: [SyndicateService, ImagePicker]
})
export class CreateSyndicatePage {
  private images = []
  public todo: FormGroup;
  public hideimagebtn: boolean = false
  public imagechosed: boolean = false
  public namechosed: boolean = false
  public sImage: string = ''
  public title: string = ''
  base64Image

  constructor(
    private imagePicker: ImagePicker,
    private file: File,
    private http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public appSound: AppSoundProvider,
    private formBuilder: FormBuilder,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    public _syndService: SyndicateService,
  public alertCtrl:AlertController) {

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.sImage = this.navParams.get('image');
    if (this.sImage != undefined && this.sImage != '') {
      var title = JSON.parse(localStorage.getItem('sdetails')).title
      var data = {
        title: title,
        image: this.sImage
      }
      console.log('image url', this.sImage);
      localStorage.setItem('sdetails', JSON.stringify(data));
      // this.hideimagebtn = true
      // this.imagechosed = true
    }
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    if (localStorage.getItem('sdetails')) {
      var storeddata = JSON.parse(localStorage.getItem('sdetails'))
      this.sImage = storeddata.image
      this.title = storeddata.title
      if (this.sImage != undefined && this.sImage != '') {
        this.hideimagebtn = true
      }

    }
    this.getCovers()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSyndicatePage');
    // this.getCovers()
  }

  chooseImage() {
    this.appSound.play('buttonClick');
    var data = {
      title: this.todo.value.title,
      image: this.sImage
    }
    localStorage.setItem('sdetails', JSON.stringify(data));
    this.navCtrl.push('ChooseImagePage');
  }

  showConfirm(message:string) {
    let confirm = this.alertCtrl.create({
      title: 'Alert',
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('ok')
          }
        }
      ]
    });
    confirm.present();
  }

  logForm() {
    console.log("image link", this.sImage)
    console.log("text view title ", this.todo.value.title)
    this.appSound.play('buttonClick');
    if (!this.todo.valid) {
      if (this.sImage == '' || !this.sImage) {
        this.showConfirm('Please select a cover for your syndicate')
        // this.imagechosed = true
        return;
      } else if (this.sImage != '' && !this.todo.valid) {
        // this.namechosed = true
        this.showConfirm('Please select a valid name for your syndicate')
        return;
      } else {
        this.imagechosed = false
        this.namechosed = false
      }
    } else {
      this.imagechosed = false
      this.namechosed = false
    }
    var data = {
      title: this.todo.value.title,
      image: this.sImage
    }
    localStorage.setItem('sdetails', JSON.stringify(data));
    this.navCtrl.push('CreateSyndicate2Page');
  }

  getCovers() {
    let loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/vid/blue_bg.gif" style="height:100px!important">`,
    });
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait..."
    // });
    // loader.present();
    loader.present().then(() => {
    this._syndService.getcovers().subscribe((res) => {
      var dt = res.response["0"].get_syndicate_images_lib.response.image_group
      for (var key in dt) {
        if (dt.hasOwnProperty(key)) {
          this.images.push(dt[key].trim());
        }
      }
      loader.dismiss().then(()=>{
        console.log('closed')
      })
    });
  });
  }

  selectedImage(image: any) {
    this.sImage = image
    this.hideimagebtn = true
  }
  accessGallery() {
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,
      quality: 80,
      targetWidth: 350,
      targetHeight: 120,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    }

    Camera.getPicture(cameraOptions)
      .then((file_uri) => {
        this.base64Image = file_uri;
        this.uploadPhoto(this.base64Image);
      },
        err => console.log(err));

  }

  private uploadPhoto(imageFileUri: any): void {

    this.file.resolveLocalFilesystemUrl(imageFileUri)
      .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
      .catch(err => console.log(err));
  }

  private readFile(file: any) {
    var reader;
    reader = new FileReader();
    reader.onloadend = (e) => {
      //console.log(new Int8Array(reader.result));
      //var byteArray = new Uint8Array(reader.result);
      const imgBlob = new Blob([reader.result], { type: 'image/jpg' });
      this.postData(imgBlob, file.name);
    };
    reader.readAsArrayBuffer(file);
  }

  postData(blob: any, fileName: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    let server = 'https://nima.lottosocial.com/wp-json/mobi/v2/upload/?process=syndicate';

    var extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    let myHeaders: Headers = new Headers();
    myHeaders.set('Authorization',
      'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
      'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
      'oauth_signature_method="HMAC-SHA1",' +
      'oauth_timestamp="1490087533",' +
      'oauth_nonce="dWL9pr",' +
      'oauth_version="1.0",' +
      'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"'
    );
    // myHeaders.append('Content-type', "image/"+extension);

    let options = {
      fileKey: fileName,
      fileName: fileName,
      mimeType: "image/" + extension,
      headers: myHeaders
    };
    console.log('inside service');
    console.log(blob);
    console.log(fileName);

    return this.http.post(server, blob, options)
      .catch(err => this.handleError(err))
      .map(response => response.json())
      // .finally(() => console.log('inside finaly'))
      .subscribe((ok) => {
        loader.dismiss();
        console.log("uploadPhoto:");
        console.log(ok);
        this.navCtrl.push('CreateSyndicatePage', { 'image': ok.response.image_url });
        this.sImage = ok.response.image_url
        this.hideimagebtn = true
      });
    // 	.map(res => res.json())
    //   .map((res) => {
    //     return res;
    //  })
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }


}
