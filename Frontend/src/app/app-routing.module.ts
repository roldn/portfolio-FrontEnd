import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditareduComponent } from './componentes/body/educacion/editaredu/editaredu.component';
import { NuevaeduComponent } from './componentes/body/educacion/nuevaedu/nuevaedu.component';
import { EditarExpComponent } from './componentes/body/experiencies/editar-exp/editar-exp.component';
import { NuevaExpComponent } from './componentes/body/experiencies/nueva-exp/nueva-exp.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExpComponent},
  {path:'editarexp/:id', component: EditarExpComponent},
  {path:'nuevaedu', component: NuevaeduComponent},
  {path:'editaredu/:id', component: EditareduComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgCircleProgressModule.forRoot({})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
