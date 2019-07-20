import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class BlogCardModule { 
  id: String;
  header: String;
  caption: String;
  summary: String;

  constructor(id: String, header: String, caption: String, summary: String){
    this.id = id;
    this.header = header;
    this.caption = caption;
    this.summary = summary;
  }

}
