import { Component, OnInit } from '@angular/core';
import { BlogCardModule } from '../blog-card/blog-card.module';
import { BlogCardService } from '../blog-card/blog-card.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  blogCards: BlogCardModule[];
  
  constructor(private blogCardDataService: BlogCardService, private router : Router) { }

  ngOnInit() {
    // call the API to get the blog card data
    this.blogCards = this.blogCardDataService.getBlogCards();
  }

  readBlog(blogId : string){
    this.router.navigate(['/blog/'+blogId]); 
  }

}
