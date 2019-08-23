import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'iframe-embedder',
  templateUrl: './iframe-embedder.component.html',
  styleUrls: ['./iframe-embedder.component.css']
})
export class IFrameEmbedderComponent implements OnInit {

  constructor() { }

  url = 'http://localhost:4201';

  ngOnInit() {

  }

}
