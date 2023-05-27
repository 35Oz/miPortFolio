import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pag404Component } from './componentes/pag404/pag404.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,  
    InicioComponent,
    CurriculumComponent,
    SkillsComponent,
    ProyectosComponent,
    Pag404Component,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

