import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/meso/meso.module').then(m => m.MesoModule) },
  { path: 'taxonomia', loadChildren: () => import('./modules/taxonomia/taxonomia.module').then(m => m.TaxonomiaModule) },
  { path: 'plan', loadChildren: () => import('./modules/plan/plan.module').then(m => m.PlanModule) },
  { path: 'componentes', loadChildren: () => import('./modules/componentes/componentes.module').then(m => m.ComponentesModule) },
  { path: 'microcurriculo', loadChildren: () => import('./modules/microcurriculo/microcurriculo.module').then(m => m.MicrocurriculoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
