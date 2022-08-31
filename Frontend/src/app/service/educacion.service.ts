import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = 'https://backendroldn.herokuapp.com/educacion';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + '/traer');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `/detail/${id}`);
  } 

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + '/crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `/editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `/borrar/${id}`);
  }
}
