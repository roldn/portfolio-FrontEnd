import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad: Habilidad[] = [];

  constructor(private habilidadService : HabilidadService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarHabilidad();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarHabilidad(): void {
    this.habilidadService.list().subscribe(
      data => {this.habilidad = data;}
    )
  }

  borrar(id?:number){
    this.habilidadService.delete(id).subscribe(
      data => {
        this.cargarHabilidad();
      }, err => {
        alert("ERROR! | No se pudo eliminar");
      }
    )
  }

}
