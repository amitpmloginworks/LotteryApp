import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventBlogPage } from './event-blog';

@NgModule({
  declarations: [
    EventBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(EventBlogPage),
  ],
  exports: [
    EventBlogPage
  ]
})
export class EventBlogPageModule {}
