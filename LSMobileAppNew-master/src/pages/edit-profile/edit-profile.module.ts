import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from './edit-profile';
import { EditProfileDetailsModule } from './edit-profile-details/edit-profile-details.module';
import { EditProfileEmailModule } from './edit-profile-email/edit-profile-email.module';
import { EditProfilePasswordModule } from './edit-profile-password/edit-profile-password.module';

@NgModule({
  declarations: [
    EditProfilePage,
  ],
  imports: [
    EditProfileDetailsModule,
    EditProfileEmailModule,
    EditProfilePasswordModule,
    IonicPageModule.forChild(EditProfilePage),
  ],
  exports: [
    EditProfilePage
  ]
})
export class EditProfilePageModule {}
