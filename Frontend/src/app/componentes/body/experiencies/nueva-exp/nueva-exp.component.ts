import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private expService: ExperienciaService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.expService.save(exp).subscribe(
      data => { 
        alert("Se a creado una nueva experiencia");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      })
  }


}
