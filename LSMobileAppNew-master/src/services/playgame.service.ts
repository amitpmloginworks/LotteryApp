import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Transfer, FileUploadOptions, TransferObject, } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';

import { CommonService } from './common.service';
import { AuthService } from './auth.service';
import { Params } from './params';

@Injectable()
export class PlayGame {

    private customerId: string = "";
    static get parameters() {
        return [[Http]];
    }
    constructor(
        private http: Http,
        private params: Params,
        private storage: Storage,
        public platform: Platform,
        private transfer: Transfer,
        private file: File) {

    }


    getGameInfo(GameID: any, action: string = "post", page_id: string = "3", module_names: string = "get_game_info") {
        if (!CommonService.session) {
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            })
        }
        if (!CommonService.isOnline) {
            this.params.setIsInternetAvailable(false);
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            });
        }
        this.customerId = CommonService.session.customer_id;
        console.log("getModules", CommonService.session);
        let parameter = {
            "request": [
                {
                    "action": "play_game",
                    "page_id": "3",
                    "screen_id": "3.2",
                    "module_name": "get_game_info",
                    "customer_id": this.customerId,
                    "game_id": GameID
                },
                {
                    "session_ID": CommonService.sessionId,
                    "page_ID": page_id,
                    "screen_id": "3.6",
                    "action": "get_recent_winners",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_game_recent_winners",
                    "customer_id": this.customerId,
                    "game_id": GameID
                }
            ]
        }



        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log(CommonService.getHeaderJson());

        // let url = CommonService.apiUrl + "v2/playgame/";
        let url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        var response = this.http.post(url, parameter, opt).map(res => res.json());

        return response;
    }

    //get Badges
    getGameBadges(gameId) {
        if (!CommonService.session) {
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            })
        }

        if (!CommonService.isOnline) {
            this.params.setIsInternetAvailable(false);
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            });
        }

        this.customerId = CommonService.session.customer_id;
        console.log("getModules", CommonService.session);

        let parameter = { request: [] };

        parameter.request.push({
            "website": "Lotto Social",
            "website_id": "27",
            "source_site": "mobi.lottosocial.com",
            "module_name": "badges",
            "customer_id": this.customerId,
            "game_id": gameId
        });
        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log(CommonService.getHeaderJson());
        //let url = CommonService.apiUrl + "v2/getgamebadges/";
        let url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        var response = this.http.post(url, parameter, opt).map(res => res.json());

        return response;
    }
    //fetching game booster info

    getGameBooster(customerAward_logId: string, action: string = "post", page_id: string = "3", module_names: string = "activate_game_booster") {

        if (!CommonService.session) {
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            })
        }

        if (!CommonService.isOnline) {
            this.params.setIsInternetAvailable(false);
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            });
        }

        this.customerId = CommonService.session.customer_id;
        console.log("getModules", CommonService.session);

        let parameter = { request: [] };

        parameter.request.push({
            page_id: page_id,
            screen_id: "3.1",
            action: 'play_game',
            module_name: module_names,
            customer_id: this.customerId,
            customer_award_log_id: customerAward_logId,
        });
        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log(CommonService.getHeaderForJWT());
        //  let url = CommonService.apiUrl + "v2/activatebooster/";
        let url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        var response = this.http.post(url, parameter, opt).map(res => res.json());

        return response;

    }

    //Game Thank you page info
    gameThankyouPage(customerAward_logId: string, gameName: any) {
        if (!CommonService.session) {
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            })
        }

        if (!CommonService.isOnline) {
            this.params.setIsInternetAvailable(false);
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            });
        }

        this.customerId = CommonService.session.customer_id;
        console.log("getModules", CommonService.session);

        let parameter = {
            "request": [
                {
                    "session_ID": CommonService.sessionId,
                    "page_id": 3,
                    "screen_id": "3.7",
                    "module_name": "get_game_info_thankyou_page",
                    "customer_id": this.customerId,
                    "customer_award_log_id": customerAward_logId

                },
                {
                    "session_ID": CommonService.sessionId,
                    "customer_id": this.customerId,
                    "page_id": "3",
                    "screen_id": "3.7",
                    "module_name": "get_game_reviews",
                    "product_name": gameName,
                }

            ]
        }

        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log(CommonService.getHeaderForJWT());
        //let url = CommonService.apiUrl + "v2/playgamethankyou/";
        let url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        var response = this.http.post(url, parameter, opt).map(res => res.json());

        return response;

    }
    submitTip(prod_name: any, comments: any, gameLevel: any) {
        if (!CommonService.session) {
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            })
        }

        if (!CommonService.isOnline) {
            this.params.setIsInternetAvailable(false);
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            });
        }

        this.customerId = CommonService.session.customer_id;
        let parameter = {
            "request": [
                {
                    "page_id": "3",
                    "screen_id": "3.7.1",
                    "module_name": "insert_game_review",
                    "customer_id": this.customerId,
                    "product_name": prod_name,
                    "comment_content": comments,
                    "comment_author_ip": "",
                    "comment_agent": "mobile app device details",
                    "game_level": gameLevel
                }
            ]
        }
        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log(CommonService.getHeaderForJWT());
        //let url = CommonService.apiUrl + "v2/gamereview/";
        let url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        var response = this.http.post(url, parameter, opt).map(res => res.json());

        return response;
    }
    gameLossResult(customer_award_log_id: any, gameName: any) {
        if (!CommonService.session) {
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            })
        }

        if (!CommonService.isOnline) {
            this.params.setIsInternetAvailable(false);
            return new Observable(observer => {
                observer.next(null);
                observer.complete();
            });
        }

        this.customerId = CommonService.session.customer_id;
        let parameter = {
            "request": [
                {
                    "module_name": "get_loss_game_info_thankyou_page",
                    "customer_id": this.customerId,
                    "customer_award_log_id": customer_award_log_id
                    //  "customer_award_log_id": "010000003D60C19E0E2EBA0E5B1A3C52E49EFDCEBEA10A51C4E1A335"

                },

                // { "customer_award_log_id": "01000000781411BECE6AD987DB75E3CAEA8FD1AD3E9F2E3D7ABC5051", "module_name": "get_loss_game_info_thankyou_page", "customer_id": "1971263" },
                {
                    "session_ID": CommonService.sessionId,
                    "customer_id": this.customerId,
                    "page_id": "3",
                    "screen_id": "3.7",
                    "module_name": "get_game_reviews",
                    "product_name": gameName,
                    // "posts_per_page": "1"

                }

            ]
        }
        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log(CommonService.getHeaderForJWT());
        //let url = CommonService.apiUrl + "v2/gamereview/";
        let url = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        var response = this.http.post(url, parameter, opt).map(res => res.json());

        return response;
    }

}
