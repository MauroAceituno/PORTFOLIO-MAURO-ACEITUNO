import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

const appRoutes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'portfolio',
    component: ExperienciaComponent,
  },
  {
    path: 'about',
    component: ProyectosComponent,
  },
  {
    path: 'contact',
    component: ContactoComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactoComponent,
    NavegadorComponent,
  ],
  imports: [
    LoadingBarRouterModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
