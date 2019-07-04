import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSearchSimulatorComponent } from './ai-search-simulator.component';

describe('AiSearchSimulatorComponent', () => {
  let component: AiSearchSimulatorComponent;
  let fixture: ComponentFixture<AiSearchSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiSearchSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiSearchSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
