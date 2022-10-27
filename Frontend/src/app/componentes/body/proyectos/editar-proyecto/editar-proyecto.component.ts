import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyecto = null;
  constructor(private proyectoService: ProyectoService, private activatedRoute : ActivatedRoute, private router : Router, public imagenService : ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert('Error! | Modificaciones NO implementadas');
        this.router.navigate(['']);
      }
    )
  }
}
