import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  persona:persona = new persona("","","");

  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

  /*
".subscribe" es un elemento que permite al programa estar siempre en escucha ante modificaciones.
En este caso, cuando la variable "persona" cambie, esta se guardará en "data", el ".suscribe" ESCUCHA al "data" y lo pasa al Service
*/


}
