import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaeItemComponent } from './rae-item.component';

describe('RaeItemComponent', () => {
  let component: RaeItemComponent;
  let fixture: ComponentFixture<RaeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaeItemComponent]
    });
    fixture = TestBed.createComponent(RaeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
