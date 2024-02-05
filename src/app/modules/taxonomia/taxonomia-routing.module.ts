import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxonomiaComponent } from './taxonomia.component';

const routes: Routes = [
  { path: '', component: TaxonomiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxonomiaRoutingModule { }
