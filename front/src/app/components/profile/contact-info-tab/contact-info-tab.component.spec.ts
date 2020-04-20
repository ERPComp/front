import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoTabComponent } from './contact-info-tab.component';

describe('ContactInfoTabComponent', () => {
  let component: ContactInfoTabComponent;
  let fixture: ComponentFixture<ContactInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
