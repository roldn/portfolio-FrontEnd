import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url = environment.URL + 'habilidades'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.url + '/traer');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.url + `/detail/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.url + '/create', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.url + `/edit/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/delete/${id}`);
  }
}
