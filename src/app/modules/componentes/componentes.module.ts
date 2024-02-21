import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponentesComponent } from './componentes.component';
import { ViewComponenteComponent } from './view-componente/view-componente.component';


@NgModule({
  declarations: [
    ComponentesComponent,
    ViewComponenteComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
