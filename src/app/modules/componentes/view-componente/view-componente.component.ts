import { Componente, Componentes, Curso, Malla } from './../../../clases/malla';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-componente',
  templateUrl: './view-componente.component.html',
  styleUrls: ['./view-componente.component.sass']
})
export class ViewComponenteComponent implements OnInit {
  public id!: string
  public cursos: Curso[] = []
  public componentes = Componentes
  public componente!: any
  public infoComponente: any;

  public gradiente!: string

  constructor(
    private route: ActivatedRoute
    ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.componente = this.componentes.find(comp => comp.nombre === this.id)
    this.route.params.pipe(
      switchMap((params) => {
        // Asumiendo que cargarInformacion ahora devuelve un Observable
        return this.cargarInformacion(params['id']);
      })
    ).subscribe(data => {
      // Actualiza tu información basada en los nuevos datos
      this.infoComponente = data;
    });
  }

  cargarInformacion(id: string): Observable<any> {
    this.componente = this.componentes.find(comp => comp.nombre === id)
    this.cursos = Malla.semestres.flatMap(semestre =>
      semestre.cursos.filter(curso => curso.componente === id)
    );
    return of();
  }

  getBgColor(){
    console.log("linear-gradient(180deg, "+this.componente.color+" 0%, "+this.componente.grad+" 35%)")
    return "linear-gradient(180deg, "+this.componente.color+" 0%, "+this.componente.grad+" 35%)"
  }

}
