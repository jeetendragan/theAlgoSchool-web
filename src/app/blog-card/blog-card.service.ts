import { Injectable } from '@angular/core';
import { BlogCardModule } from './blog-card.module';

@Injectable({
  providedIn: 'root'
})
export class BlogCardService {

  blogCards: BlogCardModule[] = [
    {
      "id": 1,
      "header": "About",
      "caption": "Blog for what?",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci, a porta velit feugiat vitae. Aliquam fermentum, quam nec faucibus efficitur, turpis turpis tincidunt arcu, eget scelerisque ligula nisi id lorem. Suspendisse ornare, lacus ac iaculis rhoncus, tellus est laoreet odio, at suscipit risus magna et mi. Nullam fermentum lectus eu mauris cursus tempor. Curabitur magna sem, hendrerit nec accumsan at, fringilla eu lectus. Morbi auctor tortor at sapien pharetra pulvinar. Donec vestibulum hendrerit dolor, nec dapibus magna laoreet at. Nulla facilisi. Ut id lectus congue, gravida odio vitae, bibendum nisl. Maecenas mauris leo, pulvinar quis nulla vel, sodales ornare massa. Nam in pretium purus. Mauris dictum laoreet felis, faucibus placerat neque volutpat nec. Morbi placerat, metus sed mollis tristique, tortor ante auctor leo, non auctor eros nisi eget est. Morbi at euismod neque. Mauris molestie mauris mi, eu facilisis ligula mollis non. Curabitur euismod, lorem in lacinia posuere, velit metus tincidunt tortor, nec facilisis urna felis ac ligula."
    },
    {
      "id": 2,
      "header": "This is some blog header 2",
      "caption": "this is the blog caption 2",
      "summary": "This is some summary 2"
    },
    {
      "id": 3,
      "header": "Salesman optimization",
      "caption": "See how code can help a salesman do his job faster",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci, a porta velit feugiat vitae. Aliquam fermentum, quam nec faucibus efficitur, turpis turpis tincidunt arcu, eget scelerisque ligula nisi id lorem. Suspendisse ornare, lacus ac iaculis rhoncus, tellus est laoreet odio, at suscipit risus magna et mi. Nullam fermentum lectus eu mauris cursus tempor. Curabitur magna sem, hendrerit nec accumsan at, fringilla eu lectus. Morbi auctor tortor at sapien pharetra pulvinar. Donec vestibulum hendrerit dolor, nec dapibus magna laoreet at. Nulla facilisi. Ut id lectus congue, gravida odio vitae, bibendum nisl. Maecenas mauris leo, pulvinar quis nulla vel, sodales ornare massa. Nam in pretium purus. Mauris dictum laoreet felis, faucibus placerat neque volutpat nec. Morbi placerat, metus sed mollis tristique, tortor ante auctor leo, non auctor eros nisi eget est. Morbi at euismod neque. Mauris molestie mauris mi, eu facilisis ligula mollis non. Curabitur euismod, lorem in lacinia posuere, velit metus tincidunt tortor, nec facilisis urna felis ac ligula."
    },
    {
      "id": 4,
      "header": "Generative design",
      "caption": "See how code can help a designer do his job faster",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci, a porta velit feugiat vitae. Aliquam fermentum, quam nec faucibus efficitur, turpis turpis tincidunt arcu, eget scelerisque ligula nisi id lorem. Suspendisse ornare, lacus ac iaculis rhoncus, tellus est laoreet odio, at suscipit risus magna et mi. Nullam fermentum lectus eu mauris cursus tempor. Curabitur magna sem, hendrerit nec accumsan at, fringilla eu lectus. Morbi auctor tortor at sapien pharetra pulvinar. Donec vestibulum hendrerit dolor, nec dapibus magna laoreet at. Nulla facilisi. Ut id lectus congue, gravida odio vitae, bibendum nisl. Maecenas mauris leo, pulvinar quis nulla vel, sodales ornare massa. Nam in pretium purus. Mauris dictum laoreet felis, faucibus placerat neque volutpat nec. Morbi placerat, metus sed mollis tristique, tortor ante auctor leo, non auctor eros nisi eget est. Morbi at euismod neque. Mauris molestie mauris mi, eu facilisis ligula mollis non. Curabitur euismod, lorem in lacinia posuere, velit metus tincidunt tortor, nec facilisis urna felis ac ligula."
    },
    {
      "id": 5,
      "header": "A*",
      "caption": "See how code can help a taxi driver do his job faster",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis ullamcorper orci, a porta velit feugiat vitae. Aliquam fermentum, quam nec faucibus efficitur, turpis turpis tincidunt arcu, eget scelerisque ligula nisi id lorem. Suspendisse ornare, lacus ac iaculis rhoncus, tellus est laoreet odio, at suscipit risus magna et mi. Nullam fermentum lectus eu mauris cursus tempor. Curabitur magna sem, hendrerit nec accumsan at, fringilla eu lectus. Morbi auctor tortor at sapien pharetra pulvinar. Donec vestibulum hendrerit dolor, nec dapibus magna laoreet at. Nulla facilisi. Ut id lectus congue, gravida odio vitae, bibendum nisl. Maecenas mauris leo, pulvinar quis nulla vel, sodales ornare massa. Nam in pretium purus. Mauris dictum laoreet felis, faucibus placerat neque volutpat nec. Morbi placerat, metus sed mollis tristique, tortor ante auctor leo, non auctor eros nisi eget est. Morbi at euismod neque. Mauris molestie mauris mi, eu facilisis ligula mollis non. Curabitur euismod, lorem in lacinia posuere, velit metus tincidunt tortor, nec facilisis urna felis ac ligula."
    }
  ];

  constructor() { }

  public getBlogCards(): BlogCardModule[] {
    return this.blogCards;
  }

}
