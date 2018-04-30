import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  exports: [
    SignupPage
  ],
  providers:[UniqueDeviceID]

})
export class SignupPageModule {}
