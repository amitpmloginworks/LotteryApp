// app/shared/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


@Injectable()
export class CommonService {
    public static SecureStorageUser: string = 'lotto_user';
    public static session: any;
    public static sessionId: string = "";
    public static userSessionId: string = "";
    public static userSessionToken: string = "";

    public static isOnline: boolean = false;
    public static updateAvailable: boolean = false;

    public static sitename: string = 'https://nima.lottosocial.com/';
    public static apiUrl: string = 'https://nima.lottosocial.com/wp-json/mobi/';
    public static REDIS_API_URL = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi";
    public static BRANCH_IO_KEY = "key_test_epDCJkvrmUr5cYlfLpLIOopjxFopHJES";
    public static BRANCH_IO_URL = "https://api.branch.io/v1/url";
    public static version: string = 'v2';

    public static apiUrlDF: string = 'http://api.hatchster.com/api/v2/sqllbtnima2016/_proc/';
    public static apiDFUser: string = 'http://api3.hatchster.com/api/';
    public static nullObserver = new Observable(observer => {
        observer.next(null);
        observer.complete();
    });

    public static JWT: any;
    public static countries: any;

    constructor(private http: Http, private storage: Storage) {
        this.storage.get('user_session_token').then((val) => {

            CommonService.JWT = val;
            console.log(CommonService.JWT)
        });

    }

    static get parameters() {
        return [[Http], [Storage]];
    }


    public static getHeaderJson(): Headers {
        let myHeaders: Headers = new Headers();

        myHeaders.set('Content-type', 'application/json');

        /*
        
        OAuth oauth_consumer_key="NDes1FKC0Kkg",
        oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",
        oauth_signature_method="HMAC-SHA1",
        oauth_timestamp="1490087533",
        oauth_nonce="dWL9pr",
        oauth_version="1.0",
        oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"
        
        OAuth oauth_consumer_key="NDes1FKC0Kkg", oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1490087533", oauth_nonce="dWL9pr", oauth_version="1.0", oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"
        
        */
        myHeaders.append('Authorization',
            'Oauth oauth_consumer_key = "NDes1FKC0Kkg",' +
            'oauth_token="djKnEJjJ7TYw0VJEsxGEtlfg",' +
            'oauth_signature_method="HMAC-SHA1",' +
            'oauth_timestamp="1490087533",' +
            'oauth_nonce="dWL9pr",' +
            'oauth_version="1.0",' +
            'oauth_signature="mQF41gSF7KIuVqzqcI0nSX1UklE%3D"'
        );

        return myHeaders;
    }

    public static getHeaderDF(): Headers {

        let myHeaders: Headers = new Headers();

        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '5e617cc3809087b481a7cfec1254256bc2dc586ca5c6551a5c59967703461755');

        return myHeaders;
    }

    public static getDFHeaderUser(): Headers {
        let myHeaders: Headers = new Headers();

        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d');

        return myHeaders;
    }

    public static getHeaderForJWT(): Headers {
        let myHeaders: Headers = new Headers();
        myHeaders.set('Content-type', 'application/json');
        myHeaders.append('X-DreamFactory-Api-Key', '5e617cc3809087b481a7cfec1254256bc2dc586ca5c6551a5c59967703461755');
        myHeaders.append('X-DreamFactory-Session-Token', CommonService.JWT);

        return myHeaders;
    }
    updateJWT(RecievedData: any) {

        CommonService.JWT = RecievedData;
    }

    getCountry() {
        if (CommonService.countries) {
            return Observable.create(observer => {
                observer.next(CommonService.countries);
                observer.complete();
            });
        } else {
            let action = CommonService.REDIS_API_URL;
            // let action = CommonService.version + '/login/';
            let data = {
                "request": [
                    {
                        "page_id": "1",
                        "screen_id": "1.1",
                        "module_name": "get_country_code_flag"
                    }
                ]
            };

            let myHeaders: Headers = new Headers();
            myHeaders.set('Content-type', 'application/json');

            let opt: RequestOptions = new RequestOptions({
                headers: CommonService.getHeaderForJWT()
            });

            var response = this.http.post(action, data, opt)
                .map(res => res.json());

            return response;
        }
    }

    getNewRelease() {

        //let action = CommonService.apiUrl + CommonService.version + '/login/';
        let action = CommonService.REDIS_API_URL;
        let data = {
            "request": [
                {
                    "session_ID": CommonService.sessionId,
                    "page_ID": "1",
                    "screen_id": "1.9",
                    "action": "new_release",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "module_name": "get_new_release"
                }]
        };


        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log("get_new_release", action, data);
        var response = this.http.post(action, data, opt)
            .map(res => res.json());

        return response;

    }

    trackSegmentPage(page_Name: string, page_Url: string) {

        if (CommonService.session) {
            //let action = CommonService.version + '/segment_page';
            let action = CommonService.REDIS_API_URL;
            let data = {
                "request": [
                    {
                        "customer_id": CommonService.session.customer_id,
                        "page_name": page_Name,
                        "page_url": page_Url,
                        "module_name": 'wp_segment_tracking'
                    }
                ]
            };

            let opt: RequestOptions = new RequestOptions({
                headers: CommonService.getHeaderForJWT()
            });

            var response = this.http.post(action, data, opt)
                .map(res => res.json());
            return response;
        }
    }
    getCreditPoints() {

        //let action = "https://nima.lottosocial.com/wp-json/mobi/v2/voucher/"
        let action = "https://api3.hatchster.com/api/v2/mobileapp_moduleapi"
        let data = {
            "request": [
                {
                    "session_ID": CommonService.sessionId,
                    "action": "get_account_details",
                    "website": "Lotto Social",
                    "website_id": "27",
                    "source_site": "mobi.lottosocial.com",
                    "page_id": "7",
                    "screen_id": "7.1",
                    "module_name": "get_balance_details",
                    "customer_id": CommonService.session.customer_id
                }

            ]
        }
        let opt: RequestOptions = new RequestOptions({
            headers: CommonService.getHeaderForJWT()
        });

        console.log("getCreditPoints", action, data);
        var response = this.http.post(action, data, opt)
            .map(res => res.json());

        return response;

    }


    getValue(key: string): Promise<any> {
        return this.storage.get(key);
    }
    getInvalidModules(parameters: any) {
        if (CommonService.session) {
            let action = CommonService.REDIS_API_URL;

            let parameter = { request: [] };
            parameter.request.push({
                module_name: "validate_module_name_serial",
                module_data: parameters
            })

            let opt: RequestOptions = new RequestOptions({
                headers: CommonService.getHeaderForJWT()
            });
            console.log(JSON.stringify(parameter))
            var response = this.http.post(action, parameter, opt)
                .map(res => res.json());
            return response;
        }
    }
}





