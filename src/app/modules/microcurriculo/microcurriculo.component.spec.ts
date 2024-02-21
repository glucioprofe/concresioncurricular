import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrocurriculoComponent } from './microcurriculo.component';

describe('MicrocurriculoComponent', () => {
  let component: MicrocurriculoComponent;
  let fixture: ComponentFixture<MicrocurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrocurriculoComponent]
    });
    fixture = TestBed.createComponent(MicrocurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
