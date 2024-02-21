import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponenteComponent } from './view-componente.component';

describe('ViewComponenteComponent', () => {
  let component: ViewComponenteComponent;
  let fixture: ComponentFixture<ViewComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComponenteComponent]
    });
    fixture = TestBed.createComponent(ViewComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
