import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaItemComponent } from './ra-item.component';

describe('RaItemComponent', () => {
  let component: RaItemComponent;
  let fixture: ComponentFixture<RaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaItemComponent]
    });
    fixture = TestBed.createComponent(RaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
