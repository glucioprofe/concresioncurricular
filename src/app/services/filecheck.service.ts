import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilecheckService {

  constructor(private http: HttpClient) {}

  // Método para verificar la existencia del archivo
  public checkFileExistence(filePath: string): Observable<boolean> {
    return this.http.get(filePath, { responseType: 'blob' })
      .pipe(
        map(() => true), // Si la solicitud es exitosa, el archivo existe
        catchError((error: HttpErrorResponse) => of(false)) // Si falla, asumimos que no existe
      );
  }
}
