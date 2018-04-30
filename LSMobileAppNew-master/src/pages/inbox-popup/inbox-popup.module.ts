import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { inboxModal } from './inbox-popup';

@NgModule({
  declarations: [
    inboxModal,
  ],
  imports: [
    IonicPageModule.forChild(inboxModal)
  ],
  exports:[inboxModal]
})
export class inboxModalPageModule {}