import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrocurriculoRoutingModule } from './microcurriculo-routing.module';
import { MicrocurriculoComponent } from './microcurriculo.component';
import { MicroItemComponent } from './micro-item/micro-item.component';


@NgModule({
  declarations: [
    MicrocurriculoComponent,
    MicroItemComponent
  ],
  imports: [
    CommonModule,
    MicrocurriculoRoutingModule
  ]
})
export class MicrocurriculoModule { }
