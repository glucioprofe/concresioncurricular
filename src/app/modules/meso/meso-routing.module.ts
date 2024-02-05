import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesoComponent } from './meso.component';

const routes: Routes = [
  { path: '', component: MesoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesoRoutingModule { }
