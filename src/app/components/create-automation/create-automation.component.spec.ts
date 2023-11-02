import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutomationComponent } from './create-automation.component';

describe('CreateAutomationComponent', () => {
  let component: CreateAutomationComponent;
  let fixture: ComponentFixture<CreateAutomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAutomationComponent]
    });
    fixture = TestBed.createComponent(CreateAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
