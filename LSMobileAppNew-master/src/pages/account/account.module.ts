import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage } from './account';
import { ComponentsModule } from '../../components/components.module'
import { Badge } from '@ionic-native/badge'
import { badgesOs } from '../../services/badges.service';
import { AccountService } from '../../services/account.service';
import { ActionSheet } from '@ionic-native/action-sheet';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(AccountPage),
    
  ],
  exports: [
    AccountPage
  ],
  providers:[Badge,badgesOs, AccountService,ActionSheet]

})
export class AccountPageModule {}
