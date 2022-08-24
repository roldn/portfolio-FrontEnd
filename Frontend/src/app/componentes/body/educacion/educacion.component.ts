import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private eduService : EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarEdu();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarEdu(): void {
    this.eduService.lista().subscribe(
      data => {this.educacion = data;}
    )
  }

  borrar(id?:number){
    this.eduService.delete(id).subscribe(
      data => {
        this.cargarEdu();
      }, err => {
        alert("ERROR! | No se pudo eliminar");
      }
    )
  }
}
