import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverlaypagePage } from './overlaypage';

@NgModule({
  declarations: [
    OverlaypagePage,
  ],
  imports: [
    IonicPageModule.forChild(OverlaypagePage),
  ],
  exports: [
    OverlaypagePage
  ]
})
export class OverlaypagePageModule {}
