import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { referFriend } from './refer-friend-page';
import { ComponentsModule } from "../../components/components.module";
import { SocialSharing } from '@ionic-native/social-sharing';
import { ReferFriend } from '../../services/referfriend.service';

@NgModule({
  declarations: [
    referFriend,
  ],
  imports: [
     ComponentsModule,
    IonicPageModule.forChild(referFriend),
  ],
  providers:[SocialSharing,ReferFriend],
  exports: [
    referFriend
  ],
 // providers:[SocialSharing, ReferFriend]
})
export class ReferFriendPageModule {}
