import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileUpdateModalPage } from './profile-update-modal';

@NgModule({
  declarations: [
    ProfileUpdateModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileUpdateModalPage),
  ],
  exports: [
    ProfileUpdateModalPage
  ]
})
export class ProfileUpdateModalPageModule {}
