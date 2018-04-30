import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogElementPage } from './blog-element';

@NgModule({
  declarations: [
    BlogElementPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogElementPage),
  ],
  exports: [
    BlogElementPage
  ]
})
export class BlogElementPageModule {}
