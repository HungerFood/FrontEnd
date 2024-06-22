import { MoneyDonationListarComponent } from './component/User/MoneyDonation/money-donation-listar/money-donation-listar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeOfFoodCrearComponent } from './component/Admin/TypeOfFood/type-of-food-crear/type-of-food-crear.component';
import { TypeOfFoodListarComponent } from './component/Admin/TypeOfFood/type-of-food-listar/type-of-food-listar.component';
import { TypeOfFoodComponent } from './component/Admin/TypeOfFood/type-of-food/type-of-food.component';

import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { MAINComponent } from './component/Principal/main/main.component';

import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { MoneyDonationCrearComponent } from './component/User/MoneyDonation/money-donation-crear/money-donation-crear.component';
import { PerfilListarComponent } from './component/User/Perfil/perfil-listar/perfil-listar.component';
import { PerfilComponent } from './component/User/Perfil/perfil/perfil.component';
import { RegistrarseComponent } from './component/User/Registrarse/registrarse/registrarse.component';
import { LoginComponent } from './component/Login/login/login.component';
import { Login1Component } from './component/Login/login1/login1.component';
import { FooddonationListarComponent } from './component/User/FoodDonation/fooddonation-listar/fooddonation-listar.component';
import { TerminosYCondicionesComponent } from './component/Footer/Terminos-Y-Condiciones/terminos-y-condiciones/terminos-y-condiciones.component';
import { LibroDeReclamosComponent } from './component/Footer/Libro-De-Reclamos/libro-de-reclamos/libro-de-reclamos.component';
import { PoliticaDeCookiesComponent } from './component/Footer/Politica-De-Cookies/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './component/Footer/Politica-De-Privacidad/politica-de-privacidad/politica-de-privacidad.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros/sobre-nosotros.component';
import { LoginMainComponent } from './component/Login/login-main/login-main.component';


const routes: Routes = [
  
  //inicio de la pagina::==============================
  { path: '', component: MAINComponent },

  //principal::=======================================
  {
    path: 'principal',
    children: [
      { path: 'donar', component: DonarComponent },
      { path: 'sobre-nosotros', component: SobreNosotrosComponent },
      { path: 'contactenos', component: ContactenosComponent },
  ],
  },

 //admin::================================================
 {
  path: 'admin',
  children: [
    { path: 'TypeOfFood/findAll/listar', component: TypeOfFoodListarComponent },
    { path: 'TypeOfFood/findAll/nuevo', component: TypeOfFoodCrearComponent },
    { path: 'TypeOfFood', component: TypeOfFoodComponent },
  ],
},
//donante::================================================
{
  path: 'donante',
  children: [
    { path: 'perfil/donacionesComidaCrear', component: FooddonationCrearComponent },
    { path: 'perfil/donacionesComidaCrear/donacionesComidaListar', component: FooddonationListarComponent },
    { path: 'perfil/donacionesComidaCrear/donacionesComidaListar/donacionesComidaEditar/:id', component: FooddonationCrearComponent },
    
    { path:'perfil', component:PerfilComponent},
    { path: 'perfil/perfilListar', component: PerfilListarComponent },

    { path: 'perfil/donacionesDineroCrear', component: MoneyDonationCrearComponent },// REGISTRAR DONACIONES DE DINERO
    { path: 'perfil/donacionesDineroCrear/donacionesDineroListar', component: MoneyDonationListarComponent },// MUESTRA Y LISTA LAS DONACIONES DE DINERO
    { path: 'perfil/donacionesDineroCrear/donacionesDineroListar/donacionesDineroEditar/:id', component: MoneyDonationCrearComponent },// EDITAR DONACIONES DE DINERO

  ],
},
//footer::=================================================
{
  path: 'footer',
  children: [
    { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
    { path: 'libro-de-reclamaciones', component: LibroDeReclamosComponent },
    { path: 'politica-de-cookies', component: PoliticaDeCookiesComponent },
    { path: 'politica-de-privacidad', component: PoliticaDePrivacidadComponent },
  ],
},

//login::================================================
{ path: 'login/adm', component: LoginComponent },
{ path: 'login/user', component: Login1Component },
{ path: 'login/principal', component: LoginMainComponent},
{ path: 'login1/registrarse', component: RegistrarseComponent },
{ path: 'login1/hola-inicia-sesion', component: Login1Component },

//principal::================================================
{ path: 'principal/home', component: MAINComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
