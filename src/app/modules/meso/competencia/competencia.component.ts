import { Component, Input, OnInit } from '@angular/core';
import { Competencia, organigramaData } from 'src/app/clases/organigrama';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.sass']
})
export class CompetenciaComponent implements OnInit {
  @Input() item!: Competencia
  @Input() color!: string;
  mostrarDetalles: boolean = false; // Estado para alternar la vista
  public organigrama = organigramaData
  public colorMap!: Map<string, string>;

  constructor() {
    this.inicializarMapaDeColores();
  }
  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
  ngOnInit() {
    // Puedes realizar acciones adicionales en la inicialización si es necesario.
  }
  inicializarMapaDeColores() {
    this.colorMap = new Map();
    this.organigrama.taxonomias.forEach(tc => {
      this.colorMap.set(tc.nombre, tc.color);
    });
  }

  obtenerColorPorAbr(nombre: string): string {
    return this.colorMap.get(nombre) || '#000'; // Retorna negro si no encuentra el ABR
  }


}
