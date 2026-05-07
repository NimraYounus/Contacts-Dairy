import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDairyComponent } from './contacts-list.component';

describe('ContactsDairyComponent', () => {
  let component: ContactsDairyComponent;
  let fixture: ComponentFixture<ContactsDairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsDairyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
