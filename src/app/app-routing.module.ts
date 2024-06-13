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
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';
import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { FooddonationComponent } from './component/User/FoodDonation/fooddonation/fooddonation.component';
import { MoneyDonationCrearComponent } from './component/User/MoneyDonation/money-donation-crear/money-donation-crear.component';
import { MoneyDonationComponent } from './component/User/MoneyDonation/money-donation/money-donation.component';
import { PerfilListarComponent } from './component/User/Perfil/perfil-listar/perfil-listar.component';
import { PerfilComponent } from './component/User/Perfil/perfil/perfil.component';
import { RegistrarseComponent } from './component/User/Registrarse/registrarse/registrarse.component';
;

const routes: Routes = [

  { path: 'principal/donar', component: DonarComponent },
  { path: 'principal/sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'principal/contactenos', component: ContactenosComponent },
  { path: 'principal/hola-inicia-sesion', component: HolaIniciaSesionComponent },
  { path: 'principal/registrarse', component: RegistrarseComponent },
  { path: 'principal/perfil', component: PerfilComponent },// PERFIL PRINCIPAL, DESDE AQUI NAVEGA A TODOS LADOS
  { path: 'principal/perfilListar', component: PerfilListarComponent },// MUESTRA LOS DATOS BASICOS DEL DONANTE/USUARIO
  { path: 'principal/donacionesComidaListar', component: FooddonationComponent },// MUESTRA Y LISTA LAS DONACIONES DE COMIDA
  { path: 'principal/donacionesComidaCrear', component: FooddonationCrearComponent },// REGISTRAR DONACIONES DE COMIDA
  { path: 'principal/donacionesComidaEditar/:id', component: FooddonationCrearComponent },// EDITAR DONACIONES DE COMIDA
  { path: 'principal/donacionesDineroListar', component: MoneyDonationComponent },// MUESTRA Y LISTA LAS DONACIONES DE DINERO
  { path: 'principal/donacionesDineroCrear', component: MoneyDonationCrearComponent },// REGISTRAR DONACIONES DE DINERO
  { path: 'principal/donacionesDineroEditar/:id', component: MoneyDonationCrearComponent },// EDITAR DONACIONES DE DINERO
  { path: 'principal/login', component: LoginComponent },// INICIAR SESION


  //---------------------APLICANDO EL CHILDREN-------------------------------------
  //{
  //  path: 'principal/perfil', component: PerfilComponent, children: [
  //    {
  //      path: 'perfilListar', component: PerfilListarComponent
  //    },
  //    {
  //      path: 'donacionesComida', component: FooddonationComponent
  //    },
  //    {
  //      path: 'crearDonacionComida', component: FooddonationCrearComponent
  //    },
  //    {
  //      path: 'donacionesDinero', component: MoneyDonationComponent
  //    },
  //    {
  //      path: 'crearDonacionDinero', component: MoneyDonationCrearComponent
  //    }
  //  ]
  //},

  // { path: '', redirectTo: 'principal/home', pathMatch: 'full' }, // Ruta por defecto
  // { path: '**', redirectTo: '/principal/home' },

  //{ path: 'admin/home', component:MainAdmComponent },
  { path: 'TypeOfFood/findAll/listar', component: TypeOfFoodListarComponent },
  { path: 'TypeOfFood/findAll/nuevo', component: TypeOfFoodCrearComponent },
  { path: 'TypeOfFood', component: TypeOfFoodComponent },
  //{ path: '', redirectTo: 'admin/home', pathMatch: 'full' }, // Ruta por defecto
  //{ path: '**', redirectTo: '/admin/home' },



  { path: 'principal/home', component: MAINComponent },
  //{ path: 'principal/adim', component: MainAdmComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
