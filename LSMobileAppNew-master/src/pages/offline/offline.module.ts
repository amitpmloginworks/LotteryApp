import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfflinePage } from './offline';

@NgModule({
  declarations: [
    OfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(OfflinePage),
  ],
  exports: [
    OfflinePage
  ]
})
export class OfflinePageModule {}
