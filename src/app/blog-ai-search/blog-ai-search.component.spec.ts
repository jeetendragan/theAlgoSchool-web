import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAiSearchComponent } from './blog-ai-search.component';

describe('BlogAiSearchComponent', () => {
  let component: BlogAiSearchComponent;
  let fixture: ComponentFixture<BlogAiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
