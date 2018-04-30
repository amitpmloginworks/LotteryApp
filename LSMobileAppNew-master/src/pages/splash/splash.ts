import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage';
import { CommonService } from '../../services/common.service';

@IonicPage()
@Component({
    selector: 'page-splash',
    templateUrl: 'splash.html'
})
export class SplashPage {

    constructor(
        private storage: Storage,
        private authSrv: AuthService,
        public navCtrl: NavController,
        public navParams: NavParams) {

        //check the storage is ready or not    
        this.storage.ready().then(() => {
            var email;
            var passWord;
            var newDate;
            var tokenTime
            var dateTimeNow = new Date();

            this.storage.get('DF_EMAIL').then((val) => {
                console.log("splash df email", val)
                email = val;
            });
            this.storage.get('DF_PASSWORD').then((val) => {
                console.log("splash df password", val)
                passWord = val;
            });
            this.storage.get('session_token_time').then((val) => {
                console.log("token expiry time", val)
                if (val) {
                    newDate = new Date(val)
                    tokenTime = newDate;
                }
            });
            this.storage.get('session').then((val) => {
                CommonService.session = JSON.parse(val);
                console.log('Your session is', val);

                setTimeout(() => {
                    //Checking the user token(DF credentials)
                    if (email) {
                        //Checking the if token is valid or not
                        if (dateTimeNow < newDate) {
                            this.storage.get('session_ID').then((val) => {
                                CommonService.sessionId = val;
                            });

                            this.storage.get('user_session_id').then((val) => {
                                CommonService.userSessionId = val;
                            });

                            this.storage.get('user_session_token').then((val) => {
                                CommonService.userSessionToken = val;

                            });

                            //if valid then setting the home page as root 
                            setTimeout(() => {
                                this.navCtrl.setRoot('HomePage');
                            }, 0);

                        }
                        //in case if no time is existed for the token expiry
                        else if (!tokenTime) {
                            this.storage.remove('session_token_time')
                            this.storage.remove('user_session_token')
                            CommonService.JWT = "";
                            this.navCtrl.setRoot(WelcomePage);
                        }
                        else {
                            //in case if token is expired
                            var datetime = new Date();
                            datetime.setHours(datetime.getHours() + 10)
                            this.authSrv.getJWTToken(email, passWord).subscribe(
                                successData => {
                                    console.log("retrived the new data for JWT", successData)
                                    this.storage.set('session_ID', CommonService.sessionId);
                                    this.storage.set('user_session_token', successData.session_token);
                                    this.storage.set('user_session_id', successData.session_id);
                                    this.storage.set('session_token_time', datetime)
                                    CommonService.JWT = successData.session_token;

                                    this.storage.get('session_ID').then((val) => {
                                        CommonService.sessionId = val;
                                    });

                                    this.storage.get('user_session_id').then((val) => {
                                        CommonService.userSessionId = val;
                                    });

                                    this.storage.get('user_session_token').then((val) => {
                                        CommonService.userSessionToken = val;
                                    });
                                    setTimeout(() => {
                                        this.navCtrl.setRoot('HomePage');
                                    }, 500);
                                },
                                error => {
                                    console.log("user login error", error);
                                },
                                () => { }
                            );
                        }
                    }
                    else {
                        //if no user token then setting to welcome page
                        this.storage.remove('session_token_time')
                        this.storage.remove('user_session_token')
                        CommonService.JWT = "";
                        this.navCtrl.setRoot(WelcomePage);
                    }


                }, 0);
            });

        });

    }
}
