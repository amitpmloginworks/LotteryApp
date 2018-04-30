import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourGamesPage } from './your-games';
import { ComponentsModule } from "../../components/components.module";
import { Badge } from "@ionic-native/badge";




@NgModule({
  declarations: [
    YourGamesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(YourGamesPage),
  ],
  providers: [Badge],
  exports: [
    YourGamesPage
  ]
})
export class YourGamesPageModule { }
