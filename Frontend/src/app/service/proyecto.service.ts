import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = environment.URL + 'proyecto'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + '/traer');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `/detail/${id}`);
  } 

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + `/editar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }
}
