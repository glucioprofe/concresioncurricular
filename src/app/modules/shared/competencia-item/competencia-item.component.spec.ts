import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaItemComponent } from './competencia-item.component';

describe('CompetenciaItemComponent', () => {
  let component: CompetenciaItemComponent;
  let fixture: ComponentFixture<CompetenciaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetenciaItemComponent]
    });
    fixture = TestBed.createComponent(CompetenciaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
