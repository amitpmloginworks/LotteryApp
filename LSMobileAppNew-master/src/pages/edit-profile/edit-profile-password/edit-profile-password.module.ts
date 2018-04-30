import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePassword } from './edit-profile-password'
import { AccountService } from '../../../services/account.service';

@NgModule({
  declarations: [
    EditProfilePassword,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilePassword),
  ],
  exports: [
    EditProfilePassword
  ],
  providers:[AccountService]

})
export class EditProfilePasswordModule {}
