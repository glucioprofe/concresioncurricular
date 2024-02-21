import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/clases/malla';
import { FilecheckService } from 'src/app/services/filecheck.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-micro-item',
  templateUrl: './micro-item.component.html',
  styleUrls: ['./micro-item.component.sass']
})
export class MicroItemComponent implements OnInit{
  @Input() curso!: Curso
  public file: boolean = false
  public loading: boolean = false
  public url!: string
  public ext!: string
  constructor(private fileCheckService: FilecheckService){}
  ngOnInit(): void {
    const cursoCodigo = this.curso.codigo; // Ejemplo de código de curso
    const fileExtensions = ['docx', 'xlsx', 'txt']; // Extensiones de archivos a verificar
    this.loading = true
    fileExtensions.forEach(ext => {
      const filePath = `assets/documents/microcurriculo/${cursoCodigo}.${ext}`;
      this.fileCheckService.checkFileExistence(filePath).subscribe(exists => {
        if (exists) {
          this.file = true;
          this.ext = ext
          this.url = `../assets/documents/microcurriculo/${cursoCodigo}.${ext}`
        }
      });
    });
    this.loading = false
  }
}
