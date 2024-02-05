import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapComponent } from './rap.component';

describe('RapComponent', () => {
  let component: RapComponent;
  let fixture: ComponentFixture<RapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapComponent]
    });
    fixture = TestBed.createComponent(RapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
