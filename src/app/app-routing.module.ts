import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeOfFoodCrearComponent } from './component/Admin/TypeOfFood/type-of-food-crear/type-of-food-crear.component';
import { TypeOfFoodListarComponent } from './component/Admin/TypeOfFood/type-of-food-listar/type-of-food-listar.component';
import { TypeOfFoodComponent } from './component/Admin/TypeOfFood/type-of-food/type-of-food.component';
import { LoginComponent } from './component/Login/login/login.component';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { MAINComponent } from './component/Principal/main/main.component';
import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { FooddonationComponent } from './component/User/FoodDonation/fooddonation/fooddonation.component';
import { MoneyDonationCrearComponent } from './component/User/MoneyDonation/money-donation-crear/money-donation-crear.component';
import { MoneyDonationComponent } from './component/User/MoneyDonation/money-donation/money-donation.component';
import { PerfilListarComponent } from './component/User/Perfil/perfil-listar/perfil-listar.component';
import { PerfilComponent } from './component/User/Perfil/perfil/perfil.component';
import { RegistrarseComponent } from './component/User/Registrarse/registrarse/registrarse.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros/sobre-nosotros.component';
import { PoliticaDePrivacidadComponent } from './component/Footer/Politica-De-Privacidad/politica-de-privacidad/politica-de-privacidad.component';
import { TerminosYCondicionesComponent } from './component/Footer/Terminos-Y-Condiciones/terminos-y-condiciones/terminos-y-condiciones.component';
import { LibroDeReclamosComponent } from './component/Footer/Libro-De-Reclamos/libro-de-reclamos/libro-de-reclamos.component';
import { PoliticaDeCookiesComponent } from './component/Footer/Politica-De-Cookies/politica-de-cookies/politica-de-cookies.component';

const routes: Routes = [
  { path: '', component: MAINComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'donar', component: DonarComponent },
  { path: 'hola-inicia-sesion', component: HolaIniciaSesionComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  

  //------------------------------------------------- PRINCIPAL -------------------------------------------------
  {
    path: 'principal',
    children: [
      { path: 'donacionesDineroCrear', component: MoneyDonationCrearComponent },
      { path: 'donacionesDineroEditar/:id', component: MoneyDonationCrearComponent },
      { path: 'donacionesDineroListar', component: MoneyDonationComponent },
      { path: 'donacionesComidaCrear', component: FooddonationCrearComponent },
      { path: 'donacionesComidaEditar/:id', component: FooddonationCrearComponent },
      { path: 'donacionesComidaListar', component: FooddonationComponent },
    ],
  },

  {
    path: 'admin',
    children: [
      { path: 'TypeOfFood/findAll/listar', component: TypeOfFoodListarComponent },
      { path: 'TypeOfFood/findAll/nuevo', component: TypeOfFoodCrearComponent },
      { path: 'TypeOfFood', component: TypeOfFoodComponent },
    ],
  },

  {
    path: 'user',
    children: [
      { path: 'perfil/listar', component: PerfilListarComponent },
      { path: 'perfil/:id', component: PerfilComponent },
    ],
  },

  {
    path: 'footer',
    children: [
      { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
      { path: 'libro-de-reclamaciones', component: LibroDeReclamosComponent },
      { path: 'politica-de-cookies', component: PoliticaDeCookiesComponent },
      { path: 'politica-de-privacidad', component: PoliticaDePrivacidadComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
