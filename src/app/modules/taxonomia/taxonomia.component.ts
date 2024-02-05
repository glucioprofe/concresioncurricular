import { Component, OnInit } from '@angular/core';
import { Rap, organigramaData } from 'src/app/clases/organigrama';

@Component({
  selector: 'app-taxonomia',
  templateUrl: './taxonomia.component.html',
  styleUrls: ['./taxonomia.component.sass']
})
export class TaxonomiaComponent implements OnInit {
  public colorOriginal: string = '#000000'; // color original del elemento SVG
  public colorHover: string = '#ff0000'; // color cuando el ratón pasa por encima
  public hoveredElement: string | null = null;

  public organigrama = organigramaData
  public rap!: Rap

  public currentRapId: string | null = null;
  public color!: string
  public coordenadas = [
    {
      nivel: 'Recordar',
      axis: [
        { id: 1, x: 163, y:  80, label: '' },
        { id: 2, x: 163, y:  88, label: '' },
        { id: 3, x: 163, y:  96, label: '' },
        { id: 4, x: 163, y:  104, label: '' },
        { id: 5, x: 163, y:  112, label: '' },
        { id: 6, x: 163, y:  120, label: '' },
        { id: 7, x: 163, y:  128, label: '' },
        { id: 8, x: 163, y:  136, label: '' },

        { id: 9, x: 175, y:  72, label: '' },
        { id: 10, x: 175, y:  80, label: '' },
        { id: 11, x: 175, y:  88, label: '' },
        { id: 12, x: 175, y:  96, label: '' },
        { id: 13, x: 175, y:  104, label: '' },
        { id: 14, x: 175, y:  112, label: '' },
        { id: 15, x: 175, y:  120, label: '' },
        { id: 16, x: 175, y:  128, label: '' },
        { id: 17, x: 175, y:  136, label: '' },
        { id: 18, x: 175, y:  144, label: '' },


        { id: 19, x: 187, y:  64, label: '' },
        { id: 20, x: 187, y:  72, label: '' },
        { id: 21, x: 187, y:  80, label: '' },
        { id: 22, x: 187, y:  88, label: '' },
        { id: 23, x: 187, y:  96, label: '' },
        { id: 24, x: 187, y:  104, label: '' },
        { id: 25, x: 187, y:  112, label: '' },
        { id: 26, x: 187, y:  120, label: '' },
        { id: 27, x: 187, y:  128, label: '' },
        { id: 28, x: 187, y:  136, label: '' },
        { id: 29, x: 187, y:  144, label: '' },

        { id: 30, x: 199, y:  88, label: '' },
        { id: 31, x: 199, y:  96, label: '' },
        { id: 32, x: 199, y:  104, label: '' },
        { id: 33, x: 199, y:  112, label: '' },
        { id: 34, x: 199, y:  120, label: '' },
        { id: 35, x: 199, y:  128, label: '' },
      ]
    },
    {
      nivel: 'Entender',
      axis: [
        { id: 1, x: 110, y:  170, label: '' },
        { id: 2, x: 110, y:  178, label: '' },
        { id: 3, x: 110, y:  186, label: '' },
        { id: 4, x: 110, y:  194, label: '' },
        { id: 5, x: 110, y:  202, label: '' },


        { id: 7, x: 125, y:  162, label: '' },
        { id: 8, x: 125, y:  170, label: '' },
        { id: 9, x: 125, y:  178, label: '' },
        { id: 10, x: 125, y:  186, label: '' },
        { id: 11, x: 125, y:  194, label: '' },
        { id: 12, x: 125, y:  202, label: '' },

        { id: 13, x: 140, y:  154, label: '' },
        { id: 14, x: 140, y:  162, label: '' },
        { id: 15, x: 140, y:  170, label: '' },
        { id: 16, x: 140, y:  178, label: '' },
        { id: 17, x: 140, y:  186, label: '' },
        { id: 18, x: 140, y:  194, label: '' },

        { id: 19, x: 155, y:  146, label: '' },
        { id: 20, x: 155, y:  154, label: '' },
        { id: 21, x: 155, y:  162, label: '' },
        { id: 22, x: 155, y:  170, label: '' },
        { id: 23, x: 155, y:  178, label: '' },
        { id: 24, x: 155, y:  186, label: '' },


        { id: 25, x: 170, y:  154, label: '' },
        { id: 26, x: 170, y:  162, label: '' },
        { id: 27, x: 170, y:  170, label: '' },
        { id: 28, x: 170, y:  178, label: '' },


        { id: 29, x: 182, y:  162, label: '' },




      ]
    },
    {
      nivel: 'Aplicar',
      axis: [
        { id: 1, x: 26, y:  160, label: '' },
        { id: 2, x: 26, y:  168, label: '' },

        { id: 3, x: 38, y:  152, label: '' },
        { id: 4, x: 38, y:  160, label: '' },
        { id: 5, x: 38, y:  168, label: '' },
        { id: 6, x: 38, y:  176, label: '' },
        { id: 7, x: 38, y:  183, label: '' },

        { id: 8, x: 50, y:  144, label: '' },
        { id: 9, x: 50, y:  152, label: '' },
        { id: 10, x: 50, y:  160, label: '' },
        { id: 11, x: 50, y:  168, label: '' },
        { id: 12, x: 50, y:  176, label: '' },
        { id: 13, x: 50, y:  184, label: '' },
        { id: 14, x: 51, y:  192, label: '' },

        { id: 15, x: 62, y:  152, label: '' },
        { id: 16, x: 62, y:  160, label: '' },
        { id: 17, x: 62, y:  168, label: '' },
        { id: 18, x: 62, y:  176, label: '' },
        { id: 19, x: 62, y:  184, label: '' },
        { id: 20, x: 62, y:  192, label: '' },

        { id: 21, x: 74, y:  160, label: '' },
        { id: 22, x: 74, y:  168, label: '' },
        { id: 23, x: 74, y:  176, label: '' },
        { id: 24, x: 74, y:  184, label: '' },
        { id: 25, x: 74, y:  192, label: '' },
        { id: 26, x: 74, y:  200, label: '' },
        { id: 27, x: 74, y:  212, label: '' },
        { id: 28, x: 74, y:  224, label: '' },

        { id: 29, x: 86, y:  168, label: '' },
        { id: 30, x: 86, y:  176, label: '' },

        { id: 31, x: 86, y:  184, label: '' },
        { id: 32, x: 86, y:  192, label: '' },
        { id: 33, x: 86, y:  200, label: '' },
        { id: 34, x: 98, y:  168, label: '' },
      ]
    },
    {
      nivel: 'Analizar',
      axis: [

        { id: 1, x: 10, y:  72, label: '' },
        { id: 2, x: 10, y:  80, label: '' },
        { id: 3, x: 10, y:  88, label: '' },
        { id: 4, x: 10, y:  96, label: '' },
        { id: 5, x: 10, y:  104, label: '' },
        { id: 6, x: 10, y:  112, label: '' },
        { id: 7, x: 10, y:  120, label: '' },
        { id: 8, x: 10, y:  128, label: '' },
        { id: 9, x: 10, y:  136, label: '' },
        { id: 10, x: 11, y:  144, label: '' },

        { id: 11, x: 22, y:  72, label: '' },
        { id: 12, x: 22, y:  80, label: '' },
        { id: 13, x: 22, y:  88, label: '' },
        { id: 14, x: 22, y:  96, label: '' },
        { id: 15, x: 22, y:  104, label: '' },
        { id: 16, x: 22, y:  112, label: '' },
        { id: 17, x: 22, y:  120, label: '' },
        { id: 18, x: 22, y:  128, label: '' },
        { id: 19, x: 22, y:  136, label: '' },
        { id: 20, x: 22, y:  144, label: '' },

        { id: 21, x: 34, y:  73, label: '' },
        { id: 22, x: 34, y:  80, label: '' },
        { id: 23, x: 34, y:  88, label: '' },
        { id: 24, x: 34, y:  96, label: '' },
        { id: 25, x: 34, y:  104, label: '' },
        { id: 26, x: 34, y:  112, label: '' },
        { id: 27, x: 34, y:  120, label: '' },
        { id: 28, x: 34, y:  128, label: '' },
        { id: 29, x: 34, y:  136, label: '' },
        { id: 30, x: 34, y:  143, label: '' },

        { id: 31, x: 46, y:  80, label: '' },

      ]
    },
    {
      nivel: 'Evaluar',
      axis: [
        { id: 1, x: 26, y:  46, label: '' },
        { id: 2, x: 26, y:  54, label: '' },
        { id: 3, x: 38, y:  38, label: '' },
        { id: 4, x: 38, y:  46, label: '' },
        { id: 5, x: 38, y:  54, label: '' },
        { id: 6, x: 38, y:  62, label: '' },

        { id: 7, x: 50, y:  23, label: '' },
        { id: 8, x: 50, y:  30, label: '' },
        { id: 9, x: 50, y:  38, label: '' },
        { id: 10, x: 50, y:  46, label: '' },
        { id: 11, x: 50, y:  54, label: '' },
        { id: 12, x: 50, y:  62, label: '' },
        { id: 13, x: 50, y:  70, label: '' },

        { id: 14, x: 62, y:  15, label: '' },
        { id: 15, x: 62, y:  22, label: '' },
        { id: 16, x: 62, y:  30, label: '' },
        { id: 17, x: 62, y:  38, label: '' },
        { id: 18, x: 62, y:  46, label: '' },
        { id: 19, x: 62, y:  54, label: '' },
        { id: 20, x: 62, y:  62, label: '' },

        { id: 21, x: 74, y:  14, label: '' },
        { id: 22, x: 74, y:  22, label: '' },
        { id: 23, x: 74, y: 30, label: '' },
        { id: 24, x: 74, y:  38, label: '' },


        { id: 25, x: 74, y:  46, label: '' },
        { id: 26, x: 74, y:  54, label: '' },
        { id: 27, x: 86, y:  14, label: '' },
        { id: 28, x: 86, y:  22, label: '' },


        { id: 29, x: 86, y:  30, label: '' },
        { id: 30, x: 86, y:  38, label: '' },
        { id: 31, x: 86, y:  46, label: '' },
        { id: 32, x: 98, y:  14, label: '' },



      ]
    },
    {
      nivel: 'Crear',
      axis: [
        { id: 1, x: 110, y:  7, label: '' },
        { id: 2, x: 110, y:  14, label: '' },
        { id: 3, x: 110, y:  22, label: '' },
        { id: 4, x: 110, y:  30, label: '' },
        { id: 5, x: 110, y:  38, label: '' },
        { id: 6, x: 110, y:  46, label: '' },

        { id: 7, x: 122, y:  14, label: '' },
        { id: 7, x: 122, y:  22, label: '' },
        { id: 8, x: 122, y:  30, label: '' },
        { id: 9, x: 122, y:  38, label: '' },
        { id: 10, x: 122, y:  46, label: '' },

        { id: 14, x: 134, y:  14, label: '' },
        { id: 15, x: 134, y:  22, label: '' },
        { id: 16, x: 134, y:  30, label: '' },
        { id: 17, x: 134, y:  38, label: '' },
        { id: 18, x: 134, y:  46, label: '' },
        { id: 19, x: 134, y:  54, label: '' },

        { id: 22, x: 146, y:  22, label: '' },
        { id: 23, x: 146, y: 30, label: '' },
        { id: 24, x: 146, y:  38, label: '' },
        { id: 25, x: 146, y:  46, label: '' },
        { id: 26, x: 146, y:  54, label: '' },
        { id: 26, x: 146, y:  62, label: '' },

        { id: 29, x: 158, y:  30, label: '' },
        { id: 30, x: 158, y:  38, label: '' },
        { id: 31, x: 158, y:  46, label: '' },
        { id: 32, x: 158, y:  54, label: '' },
        { id: 33, x: 158, y:  62, label: '' },
        { id: 33, x: 158, y:  70, label: '' },


        { id: 30, x: 170, y:  38, label: '' },
        { id: 31, x: 170, y:  46, label: '' },
        { id: 31, x: 170, y:  54, label: '' },
        { id: 31, x: 170, y:  62, label: '' },

      ]
    },
  ]

  constructor() {}

  ngOnInit(): void {
    this.asignarRapsACoordenadas();
  }

  asignarRapsACoordenadas() {
    this.organigrama.raps.forEach(rap => {
      // Encuentra el primer conjunto de coordenadas dentro del nivel correspondiente que tenga label vacío
      const nivelCoordenadas = this.coordenadas.find(nivel => nivel.nivel === rap.nivel);
      if (nivelCoordenadas) {
        const coordenadaVacia = nivelCoordenadas.axis.find(coord => coord.label === '');
        if (coordenadaVacia) {
          // Asigna el ID del rap al label de la coordenada encontrada
          coordenadaVacia.label = rap.id;
        }
      }
    });
  }

  getX(rap: any): number {
    const nivel = this.coordenadas.find(n => n.nivel === rap.nivel);
    if (nivel) {
      // Busca el axis correspondiente por label
      const axis = nivel.axis.find(a => a.label === rap.id);
      if (axis) {
        return axis.x;
      }
    }
    return 0; // Retorna un valor por defecto si no se encuentra
  }

  getY(rap: any): number {
    // Similar a getX, pero busca por nivel y retorna Y
    const nivel = this.coordenadas.find(n => n.nivel === rap.nivel);
    if (nivel) {
      // Busca el axis correspondiente por label
      const axis = nivel.axis.find(a => a.label === rap.id);
      if (axis) {
        return axis.y;
      }
    }
    return 0; // Retorna un valor por defecto si no se encuentra
  }

 getColor(): string {
  return "#cafafa"
 }
  mostrarDetalleRap(rap: any): void {
    // Aquí puedes manejar el clic en el texto, por ejemplo, mostrando detalles del RAP
    this.rap = rap
    this.currentRapId = null;
    const bloom = this.organigrama.taxonomias.find(a => a.nombre === this.rap.nivel)
    if(bloom)
      this.color = bloom?.color
    setTimeout(() => this.currentRapId = rap.id, 0);
  }

}
