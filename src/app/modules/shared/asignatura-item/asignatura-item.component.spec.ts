import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaItemComponent } from './asignatura-item.component';

describe('AsignaturaItemComponent', () => {
  let component: AsignaturaItemComponent;
  let fixture: ComponentFixture<AsignaturaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturaItemComponent]
    });
    fixture = TestBed.createComponent(AsignaturaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
