import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlZonesComponent } from './control-zones.component';

describe('ControlZonesComponent', () => {
  let component: ControlZonesComponent;
  let fixture: ComponentFixture<ControlZonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlZonesComponent]
    });
    fixture = TestBed.createComponent(ControlZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
