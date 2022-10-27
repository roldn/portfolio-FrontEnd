import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencies',
  templateUrl: './experiencies.component.html',
  styleUrls: ['./experiencies.component.css']
})
export class ExperienciesComponent implements OnInit {

  experiencia: Experiencia[] = [];


  constructor(private expService : ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia(): void {
    this.expService.lista().subscribe(
      data => {this.experiencia = data;}
    )
  }

  borrar(id?:number){
    this.expService.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
        alert("ERROR! | No se pudo eliminar");
      }
    )
  }
}
