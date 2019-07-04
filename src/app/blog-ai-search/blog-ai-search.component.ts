import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-ai-search',
  templateUrl: './blog-ai-search.component.html',
  styleUrls: ['./blog-ai-search.component.css']
})
export class BlogAiSearchComponent implements OnInit {

  constructor() { }
  showSimulator : boolean;
  ngOnInit() {
    this.showSimulator = true;
  }

  toggleSimulator(){
    this.showSimulator = !this.showSimulator;
  }

}
