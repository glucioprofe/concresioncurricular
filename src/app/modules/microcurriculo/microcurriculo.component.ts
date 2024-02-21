import { Component, OnInit } from '@angular/core';
import { Malla } from 'src/app/clases/malla';

@Component({
  selector: 'app-microcurriculo',
  templateUrl: './microcurriculo.component.html',
  styleUrls: ['./microcurriculo.component.sass']
})
export class MicrocurriculoComponent implements OnInit {

  public malla = Malla
  constructor(){}

  ngOnInit(): void {

  }
}
