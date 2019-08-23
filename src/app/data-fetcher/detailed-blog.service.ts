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
              '<li>There is also a simulator that runs your chosen search algorithm, showing the decisions that '
              + 'the algorithm makes!</li></ul>',
      embeddedProjectName: 'AI Search Simulator',
      content: '<p>We search for solutions everyday when we make decisions. We try to make sure that our decisions incure least cost and give maximum returns. Unknowingly we iterate over a lot of possiblities evaluating each one to check if it is the best fit. We select the best fit. In some cases, the number of possibilities can be huge, what do we do in such cases? We look for the "seemingly" best case or we use some estimates! A lot of search algorithms work the same way.</p>'+
      '<p>For instance, one search problem that we might face in our everyday lifes is "to find the best way to reach a location". There are various means of transport today, you can take an Uber, a subway, a bus, an airplane. So, one means of transport can take you directly to the destination but will cost a lot, some other means of transport may not cost that much but might involve changing vehicles. You might try using a combination of various means of transport. Again if you have many possibilities, you may not be able to find the best solution. Some years before we used to do this problem in our head, but now google does it for us.</p>'+
      '<div style="width: 100%; overflow: hidden;"><p>Consider a specific example of going from the Governers Hall located at the University at Buffalo\'s North Campus to Buffalo Downtown. Google Maps throws a bunch of options to you as shown in the image. The first option suggests that you walk for 9 minutes, get a bus, and then a subway. The second option suggests to take a bus in both cases. There is also a suggestion to use Uber, and Lyft.</p></div>'+
      '<div style="width:100%; text-align:center;"><img src="https://i.ibb.co/82YQrg4/main.png" width="300px" height="450px" alt="main" border="0"></div>'+
      '<p>Google Maps has walked over many possibilities to show you the best option. Essentially it runs a combinatorial optimization problem.</p>'+
      '<p><b>Where does AI search come into the picture then?</b></p>'+
      '<p>The exploration of various possibilities is done by an AI search algorithm. The selection of a search algorithm may differ for each problem and is better if it uses as much problem specific knowledge as possible.</p>'+
      '<p>I\'ve created a short <a href="">Youtube playlist</a> that explains AI search and various algorithms.</p>'+
      '<p>I\'ve also built a GUI that has implementation of various search algorithms. Enable it by toggling the switch at the top. Here\'s its <a href="https://github.com/jeetendragan/AISearchSimulator" target="_blank">GitHub</a></p>',
      containsEmbeddedProject: true,
      embeddedProjectURL: 'http://localhost:4201'
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
