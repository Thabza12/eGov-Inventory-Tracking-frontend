import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGovComponent } from './e-gov.component';

describe('EGovComponent', () => {
  let component: EGovComponent;
  let fixture: ComponentFixture<EGovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EGovComponent]
    });
    fixture = TestBed.createComponent(EGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
