import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFrameEmbedderComponent } from './iframe-embedder.component';

describe('IFrameEmbedderComponent', () => {
  let component: IFrameEmbedderComponent;
  let fixture: ComponentFixture<IFrameEmbedderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFrameEmbedderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFrameEmbedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
