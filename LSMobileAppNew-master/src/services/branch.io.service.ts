import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { CommonService } from './common.service';
import { Params } from './params';
@Injectable()
export class branchIo {
    private customerId: string = "";
    constructor(private http: Http, private params: Params) {
    }
    //Create branch.io link
    createBranchIOlLinkForPsInvite(syndId) {
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
        let action = CommonService.BRANCH_IO_URL
        let parameter = {
            "branch_key": CommonService.BRANCH_IO_KEY,
            "data": {
                "ps_Id": syndId,
                "KeyWord": "psInvite",
            }
        }
        let myHeaders: Headers = new Headers();
        myHeaders.set('Content-type', 'application/json');
        let opt: RequestOptions = new RequestOptions({
            headers: myHeaders
        });
        var response = this.http.post(action, parameter, opt).map(response => response.json());
        return response;
    }
}