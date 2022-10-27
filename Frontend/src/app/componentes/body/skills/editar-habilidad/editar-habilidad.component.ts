import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  habilidad: Habilidad = null;
  constructor(private habilidadService: HabilidadService, private activatedRoute : ActivatedRoute, private router : Router, public imagenService : ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe(
      data =>{
        this.habilidad = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert('Error! | Modificaciones NO implementadas');
        this.router.navigate(['']);
      }
    )
  }

/*
  actualizarImagen($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = 'habilidad_' + id
    this.imagenService.actualizarImagen($event, name);
  }
*/

}
