import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoComponent } from './meso.component';

describe('MesoComponent', () => {
  let component: MesoComponent;
  let fixture: ComponentFixture<MesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoComponent]
    });
    fixture = TestBed.createComponent(MesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
