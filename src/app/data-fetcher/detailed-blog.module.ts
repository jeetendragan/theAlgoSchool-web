import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class DetailedBlogModule {
  id: string;
  header: string;
  caption: string;
  summary: string;
  content: string;
  embeddedProjectName: string;
  containsEmbeddedProject: boolean;
  embeddedProjectURL: string;

  // constructor(id: string, header: string, caption: string, summary: string, containsEmbeddedProject: boolean, embeddedProjectURL: string) {
  //   this.id = id;
  //   this.header = header;
  //   this.caption = caption;
  //   this.summary = summary;
  //   this.containsEmbeddedProject = containsEmbeddedProject;
  //   this.embeddedProjectURL = embeddedProjectURL;
  // }

}
