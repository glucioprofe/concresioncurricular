import { Curso } from './../../../clases/malla';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graph-item',
  templateUrl: './graph-item.component.html',
  styleUrls: ['./graph-item.component.sass']
})
export class GraphItemComponent {
  componentes = [
    { nombre:'Fundamentación', color: '#0085f9' },
    { nombre:'Ciencias Básicas', color: '#00b1af' },
    { nombre:'Investigación', color: '#e10096' },
    { nombre:'Gestión Organizacional', color: '#909539' },
    { nombre:'Ciencias Computacionales', color: '#953944' },
    { nombre:'Administración de la Información', color: '#fc3b14' },
    { nombre:'Desarrollo de Software', color: '#d39c14' },
    { nombre:'Logística', color: '#3e3995' },
    { nombre:'Redes y Comunicaciones', color: '#399542' },
    { nombre:'Electivas', color: '#85420a' },
    { nombre:'Unipacifico', color: '#88aa00' },
  ]
  ciclos = [
    { nombre:'Fundamentación', color: '#429c63' },
    { nombre:'Profesional', color: '#f3d417' },
    { nombre:'Profundización', color: '#007fb2' },
  ]
  tipologia = [
    { nombre:'Teórica', color: '#ffa500' },
    { nombre:'Teórica Práctica', color: '#8b4513' },
    { nombre:'Práctica', color: '#008937' },
  ]
  area = [
    { nombre:'Ciencias Básicas de Ingeniería', color: '#782121', abr: 'CBI' },
    { nombre:'Formación Específica', color: '#204a87', abr: 'FE' },
    { nombre:'Ciencias Básicas', color: '#015a01', abr: 'CB' },
    { nombre:'Formación Complementaria', color: '#806600', abr: 'FC' },
    { nombre:'Nivelación', color: '#782167', abr: 'Nv' },
  ]

  @Input() curso!: Curso;

  // Suponiendo que tienes funciones que devuelven el color basado en la categoría
  getColorForCategoria(categoria: string): string {
    if(categoria === 'formacion') {
      // Aquí devolverías el color basado en this.curso.categoriaFormacion
      return '#FF5733'; // Color de ejemplo
    } else if(categoria === 'ciclo') {
      // Color basado en this.curso.cicloFormacion
      return '#33FF57'; // Color de ejemplo
    } else if(categoria === 'tipologia') {
      // Color basado en this.curso.tipologia
      return '#3357FF'; // Color de ejemplo
    }
    return '#FFFFFF'; // Color por defecto
  }
  getColorTipologia(): string{
    const elem = this.tipologia.find(item => item.nombre === this.curso.tipologia)
    if(elem?.color)
      return elem?.color
      else
        return '#FFFFFF';
  }
  getColorCiclo(): string{
    const elem = this.ciclos.find(item => item.nombre === this.curso.ciclo)
    if(elem?.color)
      return elem?.color
      else
        return '#FFFFFF';
  }
  getColorComponente(): string{
    const elem = this.componentes.find(item => item.nombre === this.curso.componente)
    if(elem?.color)
      return elem?.color
      else
        return '#FFFFFF';
  }

  getAbrArea(): string{
    const elem = this.area.find(item => item.nombre === this.curso.area)
    if(elem?.abr)
      return elem?.abr
      else
        return '---';
  }
  getColorArea(): string{
    const elem = this.area.find(item => item.nombre === this.curso.area)
    if(elem?.color)
      return elem?.color
      else
        return '#FFFFFF';
  }

  onClick() {
    // Aquí manejas el evento click del componente
  }

  onMouseOver() {
    // Aquí manejas el evento mouseover del componente
  }

  onMouseLeave() {
    // Aquí manejas el evento mouseleave del componente
  }
}
