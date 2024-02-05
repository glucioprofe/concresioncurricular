import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaItemComponent } from './competencia-item/competencia-item.component';
import { RapItemComponent } from './rap-item/rap-item.component';
import { RaItemComponent } from './ra-item/ra-item.component';
import { RaaItemComponent } from './raa-item/raa-item.component';
import { RaeItemComponent } from './rae-item/rae-item.component';
import { AsignaturaItemComponent } from './asignatura-item/asignatura-item.component';
import { PerfilItemComponent } from './perfil-item/perfil-item.component';



@NgModule({
  declarations: [
    CompetenciaItemComponent,
    RapItemComponent,
    RaItemComponent,
    RaaItemComponent,
    RaeItemComponent,
    AsignaturaItemComponent,
    PerfilItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
