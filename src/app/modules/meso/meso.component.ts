import { Competencia, Tipocompetencia, organigramaData } from './../../clases/organigrama';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-meso',
  templateUrl: './meso.component.html',
  styleUrls: ['./meso.component.sass']
})
export class MesoComponent implements OnInit{

  public componentes = [
    { abr: 'UP', nombre: 'Unipacifico', color: '#779600' },
    { abr: 'Fu', nombre: 'Fundamentación', color: '#0085f9' },
    { abr: 'CB', nombre: 'Ciencias Básicas', color: '#00b1af' },
    { abr: 'CC', nombre: 'Ciencias Computacionales', color: '#953944' },
    { abr: 'In', nombre: 'Investigación', color: '#e10096' },
    { abr: 'GO', nombre: 'Gestión Organizacional', color: '#909539' },
    { abr: 'AI', nombre: 'Administración de Información', color: '#fc3b14' },
    { abr: 'DS', nombre: 'Desarrollo de Software', color: '#d39c14' },
    { abr: 'RC', nombre: 'Redes y Comunicaciones', color: '#399542' },
    { abr: 'El', nombre: 'Electivas', color: '#85420a' },
    { abr: 'Lo', nombre: 'Logística', color: '#3e3995' },

  ]
  public tipocompetencias = [
    { abr: 'CB', nombre: 'Básica', color: '#fedc97', activo: false},
    { abr: 'CG', nombre: 'General', color: '#81c3d7', activo: false },
    { abr: 'CD', nombre: 'Disciplinar', color: '#fbc3bc', activo: false },
    { abr: 'CE', nombre: 'Especificas', color: '#9cc5a1', activo: false },
  ]

  public taxonomia = [
    { nombre: 'Recordar', color: '#ffc107ff' },
    { nombre: 'Entender', color: '#4caf50ff' },
    { nombre: 'Aplicar', color: '#03a9f4ff' },
    { nombre: 'Analizar', color: '#b578deff' },
    { nombre: 'Evaluar', color: '#ff1582ff' },
    { nombre: 'Crear', color: '#ff8300ff' },
  ]
  public display: any
  public organigrama = organigramaData
  public colorMap!: Map<string, string>;

  constructor() {
    this.inicializarMapaDeColores();
  }

  ngOnInit(): void {

  }

  getBackgroundColor(competencia: any): string {
    const tipo = this.tipocompetencias.find(t => t.abr === competencia.abr);
    return tipo ? tipo.color : '#cacaca'; // Reemplaza 'defaultColor' por un color por defecto si es necesario
  }
  gettipo(competencia: any): string {
    const tipo = this.tipocompetencias.find(t => t.abr === competencia.abr);
    return tipo ? tipo.nombre : 'Undefinido'; // Reemplaza 'defaultColor' por un color por defecto si es necesario
  }
  displayRight(item: any){
    this.display = item
  }

  toggleCompetencia(competencia: Tipocompetencia) {
    competencia.activo = !competencia.activo;
    // Logic to filter the competencias based on active tipocompetencias
    this.filtrarCompetenciasActivas();
  }

  filtrarCompetenciasActivas() {
    if (this.organigrama && this.organigrama.competencias) {
      this.organigrama.competencias.forEach((comp: Competencia) => {
        comp.activo = this.organigrama.tipocompetencias.some(t => t.abr === comp.abr && t.activo) ;
      });
    }
  }

  inicializarMapaDeColores() {
    this.colorMap = new Map();
    this.organigrama.tipocompetencias.forEach(tc => {
      this.colorMap.set(tc.abr, tc.color);
    });
  }

  obtenerColorPorAbr(abr: string): string {
    return this.colorMap.get(abr) || '#000'; // Retorna negro si no encuentra el ABR
  }









}
