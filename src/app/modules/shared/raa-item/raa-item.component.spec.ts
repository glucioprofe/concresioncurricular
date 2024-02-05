import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaaItemComponent } from './raa-item.component';

describe('RaaItemComponent', () => {
  let component: RaaItemComponent;
  let fixture: ComponentFixture<RaaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaaItemComponent]
    });
    fixture = TestBed.createComponent(RaaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
