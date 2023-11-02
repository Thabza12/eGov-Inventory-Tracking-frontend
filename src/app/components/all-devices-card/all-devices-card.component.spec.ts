import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDevicesCardComponent } from './all-devices-card.component';

describe('AllDevicesCardComponent', () => {
  let component: AllDevicesCardComponent;
  let fixture: ComponentFixture<AllDevicesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDevicesCardComponent]
    });
    fixture = TestBed.createComponent(AllDevicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
