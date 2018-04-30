import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfileEmail } from './edit-profile-email'
import { AccountService } from '../../../services/account.service';

@NgModule({
  declarations: [
    EditProfileEmail,
  ],
  imports: [
    IonicPageModule.forChild(EditProfileEmail),
  ],
  exports: [
    EditProfileEmail
  ],
  providers:[AccountService]

})
export class EditProfileEmailModule {}
