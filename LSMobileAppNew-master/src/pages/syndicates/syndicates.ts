import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, Tabs } from 'ionic-angular';
import { Params } from '../../services/params';
import { CommonService } from '../../services/common.service';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';

declare var webengage: any;

@IonicPage()
@Component({
    selector: 'page-syndicates',
    templateUrl: 'syndicates.html'
})
export class SyndicatesPage implements OnInit {
    tabId: any;
    public static session: any;
    @ViewChild('tabs') tabsRef: Tabs;
    ngOnInit(): void {
        var CurrentUserid = localStorage.getItem('appCurrentUserid');
        this.platform.ready().then((readySource) => {
            if (this.platform.is('cordova')) {
                webengage.engage();
                webengage.track('Syndicates Page', {
                    "UserId": CurrentUserid,

                });
            }
        });
    }

    tab1child = 'MySyndicatePage';
    // tab2child = CreateSyndicateTab;
    tab2child = 'CheckWinningsPage';

    indexSelected: number;

    constructor(
        public params: Params,
        public navCtrl: NavController,
        public appSound: AppSoundProvider,
        public navParams: NavParams,
        public platform: Platform,
        public commonSrv: CommonService,
        private modalController: ModalController, ) {
        this.tabId = navParams.get('tab');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SyndicatePage');
    }

    ionViewWillEnter() {
        if (this.tabId) {
            this.tabsRef.select(this.tabId)
        }
        this.indexSelected = this.navParams.data.tabIndex || 0;
        this.commonSrv.trackSegmentPage("Syndicates", "SyndicatesPage").subscribe(
            data => {
                console.log("track segment called");
            },
            err => {
                let modal = this.modalController.create('CommonErrorModelPage', { errorInfo: err });
            },
            () => { }
        );
    }

    goHomePage() {
        this.appSound.play('buttonClick');
        this.params.goHomePage();
    }

    tabChange() {
        this.appSound.play('menuClick');
    }

}
