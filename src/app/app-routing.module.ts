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
;

const routes: Routes = [
  
  //------------------------------------------------------------------RUTA POR DEFECTO----------------------------------------------------------------------------------------------
  { path: '', redirectTo: 'principal/home', pathMatch: 'full' }, // Ruta por defecto

  //------------------------------------------------------------------PRINCIPAL----------------------------------------------------------------------------------------------
  { path: 'principal/home', component: MAINComponent },

  //------------------------------------------------------------------NAVBAR DONANTE----------------------------------------------------------------------------------------------


  //------------------------------------------------------------------NAVBAR ADMIN----------------------------------------------------------------------------------------------


  //------------------------------------------------------------------NAVBAR PRINCIPAL----------------------------------------------------------------------------------------------
  { path: 'principal/sobre-nosotros', component: SobreNosotrosComponent },// SOBRE NOSOTROS
  { path: 'principal/donar', component: DonarComponent },//DONAR
  { path: 'principal/contactenos', component: ContactenosComponent },// CONTACTENOS
  { path: 'principal/hola-inicia-sesion', component: HolaIniciaSesionComponent },// HOLA INICIA SESION


  //------------------------------------------------------------------LOGIN----------------------------------------------------------------------------------------------
  { path: 'principal/login', component: LoginComponent },// INICIAR SESION

  //------------------------------------------------------------------REGISTRARSE----------------------------------------------------------------------------------------------
  { path: 'principal/registrarse', component: RegistrarseComponent },// REGISTRARSE

  //------------------------------------------------------------------PERFIL----------------------------------------------------------------------------------------------
  { path: 'principal/perfil', component: PerfilComponent },// PERFIL PRINCIPAL, DESDE AQUI NAVEGA A TODOS LADOS

  //------------------------------------------------------------------PERFIL DONANTE----------------------------------------------------------------------------------------------
  { path: 'principal/perfilListar', component: PerfilListarComponent },// MUESTRA LOS DATOS BASICOS DEL DONANTE/USUARIO


  
  
  


  //------------------------------------------------------------------DONANTE----------------------------------------------------------------------------------------------
    //DONACIONES DE DINERO
  { path: 'principal/donacionesDineroCrear', component: MoneyDonationCrearComponent },// REGISTRAR DONACIONES DE DINERO
  { path: 'principal/donacionesDineroEditar/:id', component: MoneyDonationCrearComponent },// EDITAR DONACIONES DE DINERO
  { path: 'principal/donacionesDineroListar', component: MoneyDonationComponent },// MUESTRA Y LISTA LAS DONACIONES DE DINERO
  
      //DONACIONES DE COMIDA
  { path: 'principal/donacionesComidaCrear', component: FooddonationCrearComponent },// REGISTRAR DONACIONES DE COMIDA
  { path: 'principal/donacionesComidaEditar/:id', component: FooddonationCrearComponent },// EDITAR DONACIONES DE COMIDA
  { path: 'principal/donacionesComidaListar', component: FooddonationComponent },// MUESTRA Y LISTA LAS DONACIONES DE COMIDA




  //------------------------------------------------------------------ADMIN----------------------------------------------------------------------------------------------
  { path: 'TypeOfFood/findAll/listar', component: TypeOfFoodListarComponent },
  { path: 'TypeOfFood/findAll/nuevo', component: TypeOfFoodCrearComponent },
  { path: 'TypeOfFood', component: TypeOfFoodComponent },










  //------------------------------------------------------------------FOOTER----------------------------------------------------------------------------------------------
  { path: 'footer/terminos-y-condiciones', component: TerminosYCondicionesComponent },// TERMINOS Y CONDICIONES
  { path: 'footer/libro-de-reclamaciones', component: LibroDeReclamosComponent },// LIBRO DE RECLAMACIONES
  { path: 'footer/politica-de-cookies', component: PoliticaDeCookiesComponent },// POLITICA DE COOKIES
  { path: 'footer/politica-de-privacidad', component: PoliticaDePrivacidadComponent },// POLITICA DE PRIVACIDAD
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
