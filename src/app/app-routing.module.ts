import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/meso/meso.module').then(m => m.MesoModule) },
  { path: 'taxonomia', loadChildren: () => import('./modules/taxonomia/taxonomia.module').then(m => m.TaxonomiaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
