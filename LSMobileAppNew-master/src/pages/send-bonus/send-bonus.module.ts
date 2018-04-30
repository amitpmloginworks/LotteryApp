import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendBonusPage } from './send-bonus';


@NgModule({
  declarations: [
    SendBonusPage,
  ],
  imports: [
    IonicPageModule.forChild(SendBonusPage),
  ]
})
export class SendBonusPageModule { }
