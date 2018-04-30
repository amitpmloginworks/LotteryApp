import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {gameBlog } from './game-blog';

@NgModule({
  declarations: [
    gameBlog,
  ],
  imports: [
    IonicPageModule.forChild(gameBlog),
  ],
  exports: [
    gameBlog
  ]
})
export class GameBlogPageModule {}
