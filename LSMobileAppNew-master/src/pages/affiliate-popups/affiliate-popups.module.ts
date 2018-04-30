import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffiliatePopupsPage } from './affiliate-popups';
import { VoucherService } from '../../services/voucherList_service';

@NgModule({
  declarations: [
    AffiliatePopupsPage,
  ],
  imports: [
    IonicPageModule.forChild(AffiliatePopupsPage),
  ],
  providers:[VoucherService],
  exports: [
    AffiliatePopupsPage
  ]
})
export class AffiliatePopupsPageModule {}
