import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarPrincipalComponent } from './component/Navbar/Navbar-Principal/navbar-principal/navbar-principal.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { PrincipalComponent } from './component/Principal/principal/principal.component';
import { MAINComponent } from './component/Principal/main/main.component';


const routes: Routes = [

  { path: 'principal/donar', component: DonarComponent },
  { path: 'principal/sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'principal/contactenos', component: ContactenosComponent },
  { path: 'principal/hola-inicia-sesion', component: HolaIniciaSesionComponent },
  { path: 'principal/home', component: MAINComponent },
  { path: '', redirectTo: 'principal/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/principal/home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
