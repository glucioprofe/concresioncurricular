import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrocurriculoComponent } from './microcurriculo.component';

const routes: Routes = [
  { path: '', component: MicrocurriculoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrocurriculoRoutingModule { }
