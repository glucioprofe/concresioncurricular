import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroItemComponent } from './micro-item.component';

describe('MicroItemComponent', () => {
  let component: MicroItemComponent;
  let fixture: ComponentFixture<MicroItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroItemComponent]
    });
    fixture = TestBed.createComponent(MicroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
