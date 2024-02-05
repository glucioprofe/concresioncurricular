import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxoRaeComponent } from './taxo-rae.component';

describe('TaxoRaeComponent', () => {
  let component: TaxoRaeComponent;
  let fixture: ComponentFixture<TaxoRaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxoRaeComponent]
    });
    fixture = TestBed.createComponent(TaxoRaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
