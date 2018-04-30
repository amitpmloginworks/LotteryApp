import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogElmentdetailPage } from './blog-elmentdetail';

@NgModule({
  declarations: [
    BlogElmentdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogElmentdetailPage),
  ],
  exports: [
    BlogElmentdetailPage
  ]
})
export class BlogElmentdetailPageModule {}
