import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from 'inspector';
import { Persona } from 'src/app/model/persona.model';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})

export class EditarAcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","");

  constructor(private personaService: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router : Router,
    public imagenService:ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imagenService.url
     this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert('Error! | Modificaciones NO implementadas');
        this.router.navigate(['']);
      }
    )
  }

  actualizarImagen($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id
    this.imagenService.actualizarImagen($event, name);
  }

}
