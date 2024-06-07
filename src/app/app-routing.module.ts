import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarPrincipalComponent } from './component/Navbar/Navbar-Principal/navbar-principal/navbar-principal.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { PrincipalComponent } from './component/Principal/principal/principal.component';


const routes: Routes = [
  {path: 'principal', component: NavbarPrincipalComponent, children: 
    [
      { path: 'home', component: PrincipalComponent},
      { path: 'donar', component: DonarComponent },
      { path: 'sobre-nosotros', component: SobreNosotrosComponent },
      { path: 'contactenos', component: ContactenosComponent },
      { path: 'hola-inicia-sesion', component: HolaIniciaSesionComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }  // Ruta por defecto
    ]
  },
  {path: '**', redirectTo: '/principal/home'}, // Ruta por defecto
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta por defecto
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
