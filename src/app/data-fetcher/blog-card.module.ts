import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class BlogCardModule {
  public id: string;
  public header: string;
  public caption: string;
  public summary: string;

  // constructor(id: string, header: string, caption: string, summary: string){
  //   this.id = id;
  //   this.header = header;
  //   this.caption = caption;
  //   this.summary = summary;
  // }

}
