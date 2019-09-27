import { Injectable } from '@angular/core';
import { DetailedBlogModule } from './detailed-blog.module';

Injectable({
  providedIn: 'root'
});
export class DetailedBlogService {

  detailedBlogs: DetailedBlogModule[] = [
    {
      id: 'b49b4331-3b2d-485e-b8ae-f19c93e448f6',
      header: 'AI Search',
      caption: 'Search solutions intelligently!',
      summary: '<ul>' +
              '<li>Introduces AI search</li>' +
              '<li>Why computer scientists call it the "AI" search?</li>' +
              '<li>Gives a brief description of various AI search algorithms.</li>' +
              '<li>There is also a simulator that runs your chosen search algorithm, showing the decisions that '
              + 'the algorithm makes!</li></ul>',
      embeddedProjectName: 'AI Search Simulator',
      content: '<br><p>We search for solutions everyday when we make decisions. We try to make sure that our decisions incure least cost and give maximum returns. Unknowingly we iterate over a lot of possiblities evaluating each one to check if it is the best fit. We select the best fit. In some cases, the number of possibilities can be huge, what do we do in such cases? We look for the "seemingly" best case or we use some estimates! A lot of search algorithms work the same way.</p>' +
      '<p>For instance, one search problem that we might face in our everyday lifes is "to find the best way to reach a location". There are various means of transport today, you can take an Uber, a subway, a bus, an airplane. So, one means of transport can take you directly to the destination but will cost a lot, some other means of transport may not cost that much but might involve changing vehicles. You might try using a combination of various means of transport. Again if you have many possibilities, you may not be able to find the best solution. Some years before we used to do this problem in our head, but now google does it for us.</p>' +
      '<div style="width: 100%; overflow: hidden;"><p>Consider a specific example of going from the Governers Hall located at the University at Buffalo\'s North Campus to Buffalo Downtown. Google Maps throws a bunch of options to you as shown in the image. The first option suggests that you walk for 9 minutes, get a bus, and then a subway. The second option suggests to take a bus in both cases. There is also a suggestion to use Uber, and Lyft.</p></div>' +
      '<div style="width:100%; text-align:center;"><img src="https://i.ibb.co/82YQrg4/main.png" width="300px" height="450px" alt="main" border="0"></div>' +
      '<p>Google Maps has walked over many possibilities to show you the best option. Essentially it runs a combinatorial optimization problem.</p>' +
      '<p><b>Where does AI search come into the picture then?</b></p>' +
      '<p>The exploration of various possibilities is done by an AI search algorithm. The selection of a search algorithm may differ for each problem and is better if it uses as much problem specific knowledge as possible.</p>' +
      '<p>I\'ve created some explanation videos. Watch them <a href="https://www.youtube.com/watch?v=YIxNOGCdqM4&list=PLog16ArGOo_fq34-i-Z3JPZEsq7GRQoSj" target="_blank">here</a>. It is a work in progress.</p>' +
      '<p>I\'ve also built a GUI that has implementation of various search algorithms. Enable it by toggling the switch at the top. Here\'s its <a href="https://github.com/jeetendragan/AISearchSimulator" target="_blank">GitHub</a></p>',
      containsEmbeddedProject: true,
      embeddedProjectURL: 'http://localhost:4201'
    },
    {
      id: '404fc0fe-c60b-4272-a754-a01f163ddf10',
      header: 'Taylor Series',
      caption: 'Get the intuition behind the Taylor series!',
      summary: '<ul>' +
        '<li>What is a Taylor Series?</li>' +
        '<li>How is a Taylor series used?</li>' +
        '<li>How is the Taylor series formula derived?</li></ul>',
      embeddedProjectName: '',
      content: '<br><p><b>So, what is the taylor series?</b></p><p>It is a formula that helps us come up with a polynomial approximation for a function.</p><p>What is function approximation and why is it required?</p><p>So physists, scientists, and engineers often come accross some functions that are hard to compute exactly. What do they do? They approximate just enough to create a similar behaviour. Taylor series can also be used to compute integrals. Also, polynomial functions are easy to handle. It is easy to take their derivatives and integrals.</p><p><b>What is \'function approximation\'?</b></p><p>Function approximation is to find another function(a polynomial) that fits the graph of f(x). It may not fit for every value x, but it mimics f(x) very closely.</p><p>Assuming that you have understood what function approximation is, let\'s forget taylor series for a second, and try to manually come up with a \'trick\' to approximate a given function.'+
          '<p>Let\'s approximate a simple function $$f(x) = sin(x)$$</p><p>Here\'s the sin(x) function graph</p><img src="https://i.ibb.co/J5Cb6CB/fun-sinx.png" width="400" height="325" alt="main" border="0"><p>Will a linear function fit the sin graph? Of course not. But let\'s start with $$P(x) = c_0+x$$</p><p>Where c_0 is a constant(to be found) and x is a variable.</p><p>We want P(x) to represent f(x). Which means that the following should be true.</p><p>$$c_0+x = sin(x)$$$$c_0 = 0 .. when(x = 0)$$</p>'+
          '<p>Clearly this won\'t be enough to approximate the sin function. We need to extend the polynomial.</p><p>$$P(x)=c_0+c_1*x$$ Let us take the derivative of the P(x)$$\\frac{d}{{dx}}\\left (P(x)\\right) = \\frac{d}{{dx}}\\left (c_0 + c_1 * x\\right) = c_1$$The derivative of P(x) should be equal to the derivative of f(x)$$\\frac{d}{{dx}}\\left (P(x)\\right) = \\frac{d}{{dx}}\\left (sin(x)\\right) = cos(x)$$$$c_1 = cos(x)$$Put theta = 0$$c_1 = cos(0) = 1$$We have found our second constant, c_1. Our polynomial is 0 + (1)*x = x.Let\'s plot that on the graph.</p>'+
          '<p><img src="https://i.ibb.co/9t9rtyc/1st-fit.png" width="400" height="325" alt="main" border="0"></p><p>That isn\'t a good fit at all. We need to add more heigher order terms to the polynomial.</p>$$P(x) = c_0 + c_1*x + c_2*x^2$$<p>The double derivative of f(x) will be equal to P(x)$$d\'\'(f(x)) = P\'\'(x)$$$$d\'\'(sin(x)) = P\'\'(c_0 + c_1*x + c_2*x^2)$$$$-sin(x) = 2*c_2$$</p>'+
          '<p>Put x = 0, to get the value of c_2</p><p>$$0 = 2*c_2$$$$c_2 = 0$$Okay, as c_2 is 0, we have added nothing. Let\'s add terms futher.</p><p>$$P(x) = c_0 + c_1*x + c_2*x^2 + c_3*x^3$$</p>'+
          '<p>We take the derivative of P(x) three times so that other terms get cancelled out and we are left with c_3 which has been newly added.</p>$$d\'\'\'(f(x)) = P\'\'\'(x)$$$$-cos(x) = 3*2*c_3 = 6*c_3$$$$c_3 = -1/6$$Our polynomial looks somewhat like this now- $$P(x) = x + (-1/6)*x^3$$Let us try to graph it to see how well it approximates sin(x)<p><img src="https://i.ibb.co/8sHGzpy/image.png" width="400" height="325" alt="main" border="0"></p>The approximation is pretty decent. But we should try doing better.<p>Let us take the 4th derivative of P(x) and F(X).</p>$$d\'\'\'\'(f(x)) = P\'\'\'\'(c_0 + c_1*x + c_2*x^2 + c_3 * x^3 + c_4 * x^4)$$$$d^4(f(x)) = P^4(f(x))$$$$d^4(f(x)) = 4*3*2*1*c_4$$ $$d^4(f(x)) = 4!*c_4$$$$c_4 = d^4(f(x))/4!$$More generally, I can write the nth coefficient, cn as follows:$$c_n = (d^n * f(x))/4!$$$$c_4 = sin(x)/n!$$$$c_4 = 0$$As c_4 is 0, we need to add another heigher polynomial with a degree 5. We can just use the general formula stated above.$$c_5 = (d^5 * f(x))/5!$$$$c_5 = cos(x)/5!$$$$c_5 = 1/120$$Now, our polynomial is as follows:$$P(x) = x + (-1/6)*x^3 + (1/120) * x^5$$Here is its graph.'+
          '<p><img src="https://i.ibb.co/h1n78VX/image.png" width="400" height="325" alt="main" border="0"></p>'+
          'The function is really accurate for values close to 0. Let\'s get more greedy and approximate sin(x) with a heigher degree term. But, this time I am going to skip intermediate steps. Can\'t we just generalize even further and come up with a formula to calculate constants for heigher degree terms? Yes, we can! And here it is.$$ P(x) = f(0) + f\'(0)*x + f\'\'(0)*x^2/2! + f^3(0)*x^3/3! + f^4(0)*x^4/4! + f^5(0)*x^5/5! + f^6(0)*x^6/6! + f^7(0)*x^7 + .....$$This is the <b>Maclaurin Series</b> or the <b>Taylor Series evalualed at 0</b>.<p>Let us take terms till the 9th power of x to getter a better fit. And this is how it looks.</p>$$P(x) = x + (-1/6) * x^3 + (1/120) * x^5 + (-1/7!) * x^7 + (1/9!) * x^9$$Here is a plot for each stage. '+
          '<p><img src="https://i.ibb.co/D5M5VgP/image.png" width="500" height="425" alt="main" border="0"></p>The polynomial with degree 9 (green) blends so well with the sin(x) graph that it is not even visible.<p><img src="https://i.ibb.co/MhmZQtd/image.png" width="500" height="425" alt="main" border="0"></p>To see the difference, I have plotted the values over a broader range. The function with degree 9 starts to diverge at about +5 and -5. To get more accurate, what do we do? We consider heigher order terms in the polynomial. If we manage to get infinite terms, the polygomial can approximate for all values of sin(x). But that may not be required since we might be interested in a smaller range of values. Maclaurin series is a Taylor series evaluated at 0. So, Taylor series can be written like so.$$f(a) + f\'(a)*(x-a) + f\'\'(a)*(x-a)^2/2! + f^3(a)*(x-a)^3/3! + f^4(a)*(x-a)^4/4! + f^5(a)*(x-a)^5/5! + .....$$Which gives us the dreaded formula:$$\\sum_{n=0}^\\infty (f^n(a)*(x-a)^n) / n!$$',
      containsEmbeddedProject: false,
      embeddedProjectURL: 'false'
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
