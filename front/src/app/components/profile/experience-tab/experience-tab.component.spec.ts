import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTabComponent } from './experience-tab.component';

describe('ExperienceTabComponent', () => {
  let component: ExperienceTabComponent;
  let fixture: ComponentFixture<ExperienceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
