import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesoRoutingModule } from './meso-routing.module';
import { MesoComponent } from './meso.component';
import { CompetenciaComponent } from './competencia/competencia.component';
import { RapComponent } from './rap/rap.component';
import { RaaComponent } from './raa/raa.component';
import { RaeComponent } from './rae/rae.component';


@NgModule({
  declarations: [
    MesoComponent,
    CompetenciaComponent,
    RapComponent,
    RaaComponent,
    RaeComponent
  ],
  imports: [
    CommonModule,
    MesoRoutingModule,
    SharedModule
  ]
})
export class MesoModule { }
