import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxoRaaComponent } from './taxo-raa.component';

describe('TaxoRaaComponent', () => {
  let component: TaxoRaaComponent;
  let fixture: ComponentFixture<TaxoRaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxoRaaComponent]
    });
    fixture = TestBed.createComponent(TaxoRaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
