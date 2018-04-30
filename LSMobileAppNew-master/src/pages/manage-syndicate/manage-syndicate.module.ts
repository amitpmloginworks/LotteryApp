import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageSyndicatePage } from './manage-syndicate';

@NgModule({
  declarations: [
    ManageSyndicatePage,
  ],
  imports: [
    IonicPageModule.forChild(ManageSyndicatePage),
  ],
  exports: [
    ManageSyndicatePage
  ]
})
export class ManageSyndicatePageModule {}
