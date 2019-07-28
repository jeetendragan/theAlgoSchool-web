import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class DetailedBlogModule { 
  id: String;
  header: String;
  caption: String;
  summary: String;
  content: String;
  embeddedProjectName : String;
  containsEmbeddedProject : boolean;
  embeddedProjectURL : String;

  constructor(id: String, header: String, caption: String, summary: String, containsEmbeddedProject: boolean, embeddedProjectURL: String){
    this.id = id;
    this.header = header;
    this.caption = caption;
    this.summary = summary;
    this.containsEmbeddedProject = containsEmbeddedProject;
    this.embeddedProjectURL = embeddedProjectURL;
  }

}
