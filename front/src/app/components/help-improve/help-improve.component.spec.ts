import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpImproveComponent } from './help-improve.component';

describe('HelpImproveComponent', () => {
  let component: HelpImproveComponent;
  let fixture: ComponentFixture<HelpImproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpImproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpImproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
