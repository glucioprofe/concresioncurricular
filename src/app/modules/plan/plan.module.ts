import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { GraphItemComponent } from './graph-item/graph-item.component';
import { MicrocurriculoComponent } from './microcurriculo/microcurriculo.component';


@NgModule({
  declarations: [
    PlanComponent,
    GraphItemComponent,
    MicrocurriculoComponent
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
