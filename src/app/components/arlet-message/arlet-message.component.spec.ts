import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArletMessageComponent } from './arlet-message.component';

describe('ArletMessageComponent', () => {
  let component: ArletMessageComponent;
  let fixture: ComponentFixture<ArletMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArletMessageComponent]
    });
    fixture = TestBed.createComponent(ArletMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
