import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxonomiaRoutingModule } from './taxonomia-routing.module';
import { TaxonomiaComponent } from './taxonomia.component';
import { TaxoRapComponent } from './taxo-rap/taxo-rap.component';
import { TaxoRaaComponent } from './taxo-raa/taxo-raa.component';
import { TaxoRaeComponent } from './taxo-rae/taxo-rae.component';


@NgModule({
  declarations: [
    TaxonomiaComponent,
    TaxoRapComponent,
    TaxoRaaComponent,
    TaxoRaeComponent
  ],
  imports: [
    CommonModule,
    TaxonomiaRoutingModule
  ]
})
export class TaxonomiaModule { }
