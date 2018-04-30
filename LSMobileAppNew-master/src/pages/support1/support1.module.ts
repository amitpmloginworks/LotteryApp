import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Support1Page } from './support1';

@NgModule({
  declarations: [
    Support1Page,
  ],
  imports: [
    IonicPageModule.forChild(Support1Page),
  ],
  exports: [
    Support1Page
  ]
})
export class Support1PageModule {}
