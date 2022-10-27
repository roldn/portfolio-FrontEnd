import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","");

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarPersona();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personaService.detail(1).subscribe(
      data => { this.persona = data; }
    )
  }


  borrar(id?: number) {
    this.personaService.delete(id).subscribe(
      data => {
        this.cargarPersona();
      }, err => {
        alert("ERROR! | No se pudo eliminar");
      }
    )
  }

}
