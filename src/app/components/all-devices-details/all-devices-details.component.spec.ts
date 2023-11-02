import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDevicesDetailsComponent } from './all-devices-details.component';

describe('AllDevicesDetailsComponent', () => {
  let component: AllDevicesDetailsComponent;
  let fixture: ComponentFixture<AllDevicesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDevicesDetailsComponent]
    });
    fixture = TestBed.createComponent(AllDevicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
