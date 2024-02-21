import { Malla } from './../../clases/malla';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.sass']
})
export class PlanComponent implements OnInit {
  public malla = Malla
  constructor(){}
  ngOnInit(): void {

  }
}
