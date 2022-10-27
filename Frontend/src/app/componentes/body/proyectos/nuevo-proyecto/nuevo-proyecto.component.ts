import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})

export class NuevoProyectoComponent implements OnInit {

  titulo: string = '';
  descripcionP: string = '';
  urlProyecto: string = '';
  imgProyecto: string = '';

  constructor(private proyectoService: ProyectoService, private router: Router, public imagenService : ImagenService) { }

  ngOnInit(): void { }

  onCreate(): void {
    const proyecto = new Proyecto(this.titulo, this.descripcionP, this.urlProyecto, this.imgProyecto);
    this.proyectoService.save(proyecto).subscribe(
      data => { 
        alert("Se a creado una nueva experiencia");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      })
  }
}
