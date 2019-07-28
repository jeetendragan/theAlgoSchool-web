import { Injectable } from '@angular/core';
import { DetailedBlogModule } from './detailed-blog.module';

Injectable({
  providedIn: 'root'
});
export class DetailedBlogService {

  detailedBlogs: DetailedBlogModule[] = [
    {
      id: '404fc0fe-c60b-4272-a754-a01f163ddf10',
      header: 'AI Search',
      caption: 'Search solutions intelligently!',
      summary: '<ul>' +
              '<li>Introduces AI search</li>' +
              '<li>Why computer scientists call it the "AI" search?</li>' +
              '<li>Gives a brief description of various AI search algorithms.</li>' +
              '<li>There is also a simulator that runs your chosen search algorithm at the speed you want, showing the decisions that '
              + 'the algorithm makes at every step of the way!</li></ul>',
      embeddedProjectName: 'AI Search Simulator',
      content: 'This is the detailed content of the blog',
      containsEmbeddedProject: true,
      embeddedProjectURL: 'http://localhost:4401'
    }
  ];

  constructor() { }

  public getBlogCards(): DetailedBlogModule[] {
    return this.detailedBlogs;
  }

  public getBlogCard(blogId: string): DetailedBlogModule {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.detailedBlogs.length; i++) {
      if (this.detailedBlogs[i].id === blogId) {
        return this.detailedBlogs[i];
      }
    }

    return null;
  }

}
