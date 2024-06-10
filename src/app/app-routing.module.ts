import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { MAINComponent } from './component/Principal/main/main.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';
import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { FooddonationComponent } from './component/User/FoodDonation/fooddonation/fooddonation.component';
import { MoneyDonationCrearComponent } from './component/User/MoneyDonation/money-donation-crear/money-donation-crear.component';
import { MoneyDonationComponent } from './component/User/MoneyDonation/money-donation/money-donation.component';
import { PerfilComponent } from './component/User/Perfil/perfil/perfil.component';
import { PerfilDatosComponent } from './component/User/PerfilDatos/perfil-datos/perfil-datos.component';
import { RegistrarseComponent } from './component/User/Registrarse/registrarse/registrarse.component';


const routes: Routes = [

  { path: 'principal/donar', component: DonarComponent },
  { path: 'principal/sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'principal/contactenos', component: ContactenosComponent },
  { path: 'principal/hola-inicia-sesion', component: HolaIniciaSesionComponent },
  { path: 'principal/home', component: MAINComponent },
  { path: 'principal/registrarse', component: RegistrarseComponent },
  { path: 'principal/perfil', component: PerfilComponent},
  { path: 'principal/perfilDatos', component: PerfilDatosComponent},
  { path: 'principal/donacionesComida', component: FooddonationComponent},
  { path: 'principal/donacionesDinero', component: MoneyDonationComponent},
  { path: 'principal/crearDonacionComida', component: FooddonationCrearComponent},
  { path: 'principal/crearDonacionDinero', component: MoneyDonationCrearComponent},
  { path: '', redirectTo: 'principal/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/principal/home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
