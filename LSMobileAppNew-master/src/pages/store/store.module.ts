import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorePage } from './store';
import {ComponentsModule} from '../../components/components.module'
import { Badge } from '@ionic-native/badge'
import { IonPullupModule } from 'ionic-pullup';


@NgModule({
  declarations: [
    StorePage,
  ],
  imports: [
    ComponentsModule,
    IonPullupModule,
    IonicPageModule.forChild(StorePage),
  ],
  providers:[Badge], exports:[StorePage]

})
export class StorePageModule {}
