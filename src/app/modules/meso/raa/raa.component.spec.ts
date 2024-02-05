import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaaComponent } from './raa.component';

describe('RaaComponent', () => {
  let component: RaaComponent;
  let fixture: ComponentFixture<RaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaaComponent]
    });
    fixture = TestBed.createComponent(RaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
