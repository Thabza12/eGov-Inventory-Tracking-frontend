import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockDeviceComponent } from './lock-device.component';

describe('LockDeviceComponent', () => {
  let component: LockDeviceComponent;
  let fixture: ComponentFixture<LockDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockDeviceComponent]
    });
    fixture = TestBed.createComponent(LockDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
