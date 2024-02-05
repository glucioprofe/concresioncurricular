import { Component, Input, OnInit } from '@angular/core';
import { Rap, Rapid, Taxonomia, organigramaData } from 'src/app/clases/organigrama';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrls: ['./rap.component.sass']
})
export class RapComponent implements OnInit{
  @Input() item!: Rapid
  @Input() taxonomia!: Taxonomia  | undefined
  public organigrama = organigramaData
  mostrarDetalles: boolean = false; // Estado para alternar la vista

  public rap!: Rap | undefined

  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
  ngOnInit() {
    // Puedes realizar acciones adicionales en la inicialización si es necesario.
     this.rap = this.organigrama.raps.find(r => r.id === this.item.id);
     this.taxonomia = this.organigrama.taxonomias.find(r => r.nombre === this.rap?.nivel);
  }
}
