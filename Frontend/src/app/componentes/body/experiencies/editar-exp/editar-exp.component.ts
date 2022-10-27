import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  exp: Experiencia = null;
  constructor(private expService: ExperienciaService, private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.detail(id).subscribe(
      data =>{
        this.exp = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.update(id, this.exp).subscribe(
      data => {
        this.router.navigate(['']);
      }, error => {
        alert('Error! | Modificaciones NO implementadas');
        this.router.navigate(['']);
      }
    )
  }

}
