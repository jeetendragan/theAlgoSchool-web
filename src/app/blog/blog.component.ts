import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogCardService } from '../blog-card/blog-card.service';
import { BlogCardModule } from '../blog-card/blog-card.module';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private blogCardService : BlogCardService, 
    private router: Router) { 

    }

  blogId : String;
  blog : BlogCardModule;

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log(params);
      this.blogId = params.get("id");
      this.blog = this.blogCardService.getBlogCard(this.blogId);
      if(this.blog == null)
      {
        this.router.navigate(["/page-not-found/"]);
      }
    });
  }

  navigateToHome(){
    this.router.navigate(['/home/']);
  }

}
