import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarPrincipalComponent } from './component/Navbar/Navbar-Principal/navbar-principal/navbar-principal.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { PrincipalComponent } from './component/Principal/principal/principal.component';
import { MAINComponent } from './component/Principal/main/main.component';
import { PaymentMethodComponent } from './component/Admin/PaymentMethod/payment-method/payment-method.component';import { TypeOfFoodComponent } from './component/Admin/TypeOfFood/type-of-food/type-of-food.component';
import { TypeOfFoodListarComponent } from './component/Admin/TypeOfFood/type-of-food-listar/type-of-food-listar.component';
import { TypeOfFoodCrearComponent } from './component/Admin/TypeOfFood/type-of-food-crear/type-of-food-crear.component';
;

const routes: Routes = [

  { path: 'principal/donar', component: DonarComponent },
  { path: 'principal/sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'principal/contactenos', component: ContactenosComponent },
  { path: 'principal/hola-inicia-sesion', component: HolaIniciaSesionComponent },
  { path: 'principal/home', component: MAINComponent },
  { path: '', redirectTo: 'principal/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/principal/home' },
  //prueba de typeoffood:
  // {path: 'listar', component: TypeOfFoodListarComponent},
  // {path: 'crear', component: TypeOfFoodCrearComponent},
  // {path: 'TypeOfFood', component: TypeOfFoodComponent},





];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
