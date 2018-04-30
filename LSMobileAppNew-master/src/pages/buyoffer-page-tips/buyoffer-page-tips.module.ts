import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyofferPageTipsPage } from './buyoffer-page-tips';
// import { OfferbuyPageModule} from '../../pages/offerbuy/offerbuy.module'

@NgModule({
  declarations: [
    BuyofferPageTipsPage,
  ],
  imports: [
    // OfferbuyPageModule,
    IonicPageModule.forChild(BuyofferPageTipsPage),
  ],
})
export class BuyofferPageTipsPageModule {}
