import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfileDetails } from './edit-profile-details'
import { AccountService } from '../../../services/account.service';

@NgModule({
  declarations: [
    EditProfileDetails,
  ],
  imports: [
    IonicPageModule.forChild(EditProfileDetails),
  ],
  exports: [
    EditProfileDetails
  ],
  providers:[AccountService]
  
})
export class EditProfileDetailsModule {}
