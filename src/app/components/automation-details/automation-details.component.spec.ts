import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationDetailsComponent } from './automation-details.component';

describe('AutomationDetailsComponent', () => {
  let component: AutomationDetailsComponent;
  let fixture: ComponentFixture<AutomationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomationDetailsComponent]
    });
    fixture = TestBed.createComponent(AutomationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
