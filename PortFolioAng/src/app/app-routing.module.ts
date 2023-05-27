import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component'
import { CurriculumComponent } from './componentes/curriculum/curriculum.component'
import { SkillsComponent } from './componentes/skills/skills.component'
import { ProyectosComponent } from './componentes/proyectos/proyectos.component'
import { Pag404Component } from './componentes/pag404/pag404.component';


const routes: Routes = [
  {path:'inicio', component: InicioComponent },
  {path:'curriculum', component: CurriculumComponent },
  {path:'skills', component: SkillsComponent },
  {path:'proyectos', component: ProyectosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
