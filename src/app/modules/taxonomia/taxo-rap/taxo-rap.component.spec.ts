import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxoRapComponent } from './taxo-rap.component';

describe('TaxoRapComponent', () => {
  let component: TaxoRapComponent;
  let fixture: ComponentFixture<TaxoRapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxoRapComponent]
    });
    fixture = TestBed.createComponent(TaxoRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
