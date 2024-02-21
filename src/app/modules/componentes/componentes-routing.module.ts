import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes.component';
import { ViewComponenteComponent } from './view-componente/view-componente.component';

const routes: Routes = [
  { path: '', component: ComponentesComponent },
  { path: 'view/:id', component: ViewComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
