import { Injectable } from '@angular/core';
import { BlogCardModule } from './blog-card.module';

@Injectable({
  providedIn: 'root'
})
export class BlogCardService {

  blogCards: BlogCardModule[] = [
    {
      id: '404fc0fe-c60b-4272-a754-a01f163ddf10',
      header: 'Taylor Series',
      caption: 'Get the intuition behind the Taylor series!',
      summary: '<ul>' +
              '<li>What is a Taylor Series?</li>' +
              '<li>How is a Taylor series used?</li>' +
              '<li>How is the Taylor series formula derived?</li><ul>'
    },
    {
      id: 'b49b4331-3b2d-485e-b8ae-f19c93e448f6',
      header: 'AI Search',
      caption: 'Search solutions intelligently!',
      summary: '<ul>' +
              '<li>Introduces AI search</li>' +
              '<li>Why computer scientists call it the "AI" search?</li>' +
              '<li>Run AI search algorithms on a simulator</li></ul>'
    }
  ];

  constructor() { }

  public getBlogCards(): BlogCardModule[] {
    return this.blogCards;
  }

  public getBlogCard(blogId: string): BlogCardModule {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.blogCards.length; i++){
      if (this.blogCards[i].id === blogId) {
        return this.blogCards[i];
      }
    }

    return null;
  }

}
