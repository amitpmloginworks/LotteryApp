import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';
import { HomeService } from '../services/service.home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SQLite } from '@ionic-native/sqlite';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { Network } from '@ionic-native/network';
import { paymentService } from '../services/paymentService'
import { IonicStorageModule } from '@ionic/storage';
import { Params } from '../services/params';
import { AuthService } from '../services/auth.service';
import { Device } from '@ionic-native/device';
import { DatabaseService } from '../services/db.service';
import { CommonService } from '../services/common.service';
import { FormsModule } from '@angular/forms';
import { AppSoundProvider } from '../providers/app-sound/app-sound';
import { OfferService } from '../services/offer.service'
import { SimpleTimer } from 'ng2-simple-timer';
import { PlayGame } from "../services/playgame.service";
import { branchIo } from "../services/branch.io.service";
import { WelcomePage } from '../pages/welcome/welcome';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import {SupportPage } from '../pages/support/support';
import {Support1Page} from '../pages/support1/support1';




// import {CusHeaderComponent} from '../components/cus-header/cus-header'

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SupportPage,
    Support1Page
    
 
    // CusHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,
      {
        autoFocusAssist: false,
        scrollAssist: false,
        tabsPlacement: 'top',
        iconMode: 'ios',
        tabsHighlight: true,
        mode: 'md',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        statusbarPadding: false
      }),
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SupportPage,
    Support1Page
    
   
  ],
  providers: [
    StatusBar,
    HttpModule,
    SplashScreen,
    AppSoundProvider,
    SQLite,
    Transfer, File,
    Network,
    paymentService,
    IonicStorageModule,
    OfferService,
    Params,
    AuthService,
    Device,
    DatabaseService,
    HomeService,
    CommonService,
    InAppBrowser,
    SimpleTimer,
    NativeAudio,
    PlayGame,
    branchIo,
    NativePageTransitions,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
