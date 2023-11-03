import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMapComponent } from './the-map.component';

describe('TheMapComponent', () => {
  let component: TheMapComponent;
  let fixture: ComponentFixture<TheMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheMapComponent]
    });
    fixture = TestBed.createComponent(TheMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
