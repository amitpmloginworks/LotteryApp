import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedeemGamesPage } from './redeem-games';


@NgModule({
  declarations: [
    RedeemGamesPage,
  ],
  imports: [

    IonicPageModule.forChild(RedeemGamesPage),
  ],

  exports: [
    RedeemGamesPage
  ]
})
export class RedeemGamesPageModule { }
