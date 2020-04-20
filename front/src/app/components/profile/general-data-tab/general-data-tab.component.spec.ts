import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDataTabComponent } from './general-data-tab.component';

describe('GeneralDataTabComponent', () => {
  let component: GeneralDataTabComponent;
  let fixture: ComponentFixture<GeneralDataTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDataTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDataTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
