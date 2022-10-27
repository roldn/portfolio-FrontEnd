import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  titulo: string = '';
  porcentaje: number;
  imgHabilidad: string = '';

  constructor(private habilidadService: HabilidadService, private router: Router, public imagenService : ImagenService ) { }

  ngOnInit(): void { }

  onCreate(): void {
    const habilidad = new Habilidad(this.titulo, this.porcentaje);
    this.habilidadService.save(habilidad).subscribe(
      data => { 
        alert("Se a creado una nueva experiencia");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      })
  }

  /*
  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.imgHabilidad = this.imagenService.url
    this.habilidadService.save(id, this.imgHabilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert('Error! | Modificaciones NO implementadas');
        this.router.navigate(['']);
      }
    )
  }

  cargarImagen($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id
    this.imagenService.actualizarImagen($event, name);
  }
*/
}

