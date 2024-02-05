import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapItemComponent } from './rap-item.component';

describe('RapItemComponent', () => {
  let component: RapItemComponent;
  let fixture: ComponentFixture<RapItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapItemComponent]
    });
    fixture = TestBed.createComponent(RapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
