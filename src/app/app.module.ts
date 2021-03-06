import { DetailedBlogModule } from './data-fetcher/detailed-blog.module';
import { BlogCardModule } from './data-fetcher/blog-card.module';
import { DetailedBlogService } from './data-fetcher/detailed-blog.service';
import { BlogCardService } from './data-fetcher/blog-card.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { BlogComponent } from './blog/blog.component';
import { FeedComponent } from './feed/feed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IFrameEmbedderComponent, SafePipe } from './iframe-embedder/iframe-embedder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    FeedComponent,
    PageNotFoundComponent,
    IFrameEmbedderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    BlogCardModule,
    DetailedBlogModule
  ],
  providers: [
    BlogCardService,
    DetailedBlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
