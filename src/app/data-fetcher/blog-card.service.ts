import { Injectable } from '@angular/core';
import { BlogCardModule } from './blog-card.module';

@Injectable({
  providedIn: 'root'
})
export class BlogCardService {

  blogCards: BlogCardModule[] = [
    {
      id: '404fc0fe-c60b-4272-a754-a01f163ddf10',
      header: 'AI Search',
      caption: 'Search solutions intelligently!',
      summary: '<ul>' +
              '<li>Introduces AI search</li>' +
              '<li>Why computer scientists call it the "AI" search?</li>' +
              '<li>Gives a brief description of various AI search algorithms.</li>' +
              '<li>There is also a simulator that runs your chosen search algorithm at the speed you want, showing the decisions that '
              + 'the algorithm makes at every step of the way!</li></ul>'
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
