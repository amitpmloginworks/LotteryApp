import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePage } from './update';
import { Market } from '@ionic-native/market';

@NgModule({
  declarations: [
    UpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatePage),
  ],
  providers:[Market],
  exports: [
    UpdatePage
  ]
})
export class UpdatePageModule {}
