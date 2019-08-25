import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailedBlogService } from '../data-fetcher/detailed-blog.service';
import { DetailedBlogModule } from '../data-fetcher/detailed-blog.module';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private detailedBlogService: DetailedBlogService,
              private router: Router) {

    }

  blogId: string;
  blog: DetailedBlogModule;
  showEmbeddedProjectWindow: boolean;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.blogId = params.get('id');
      this.blog = this.detailedBlogService.getBlogCard(this.blogId);
      if (this.blog == null) {
        this.router.navigate(['/page-not-found/']);
      } else {
        this.showEmbeddedProjectWindow = this.blog.containsEmbeddedProject;
      }
    });
  }

  closeEmbeddedWindow() {
    this.showEmbeddedProjectWindow = false;
  }

  openEmbeddedProjectInNewTab() {
    window.open('https://ai-search-simulator.herokuapp.com/', '_blank');
  }

  navigateToHome() {
    this.router.navigate(['/home/']);
  }

  toggleSimulator() {
    this.showEmbeddedProjectWindow = !this.showEmbeddedProjectWindow;
  }

}
