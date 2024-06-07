import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar tus componentes
import { NavbarAdminComponent } from './component/Navbar/Navbar-Admin/navbar-admin/navbar-admin.component';
import { NavbarDonanteComponent } from './component/Navbar/Navbar-Donante/navbar-donante/navbar-donante.component';
import { NavbarPrincipalComponent } from './component/Navbar/Navbar-Principal/navbar-principal/navbar-principal.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { PrincipalComponent } from './component/Principal/principal/principal.component';
import { FooterPrincipalComponent } from './component/Footer/footer-principal/footer-principal.component';

//importar los modulos de angular material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FooddonationbydonorComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor/fooddonationbydonor.component';
import { FooddonationComponent } from './component/User/FoodDonation/fooddonation/fooddonation.component';
import { FooddonationbydonorCrearComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor-crear/fooddonationbydonor-crear.component';
import { FooddonationbydonorListarComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor-listar/fooddonationbydonor-listar.component';
import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { FooddonationListarComponent } from './component/User/FoodDonation/fooddonation-listar/fooddonation-listar.component';
import { TransactionvoucherComponent } from './component/User/TransactionVoucher/transactionvoucher/transactionvoucher.component';
import { TransactionvoucherCrearComponent } from './component/User/TransactionVoucher/transactionvoucher-crear/transactionvoucher-crear.component';
import { TransactionvoucherListarComponent } from './component/User/TransactionVoucher/transactionvoucher-listar/transactionvoucher-listar.component';
import { PaymentMethodComponent } from './component/Admin/PaymentMethod/payment-method/payment-method.component';
import { PaymentMethodCrearComponent } from './component/Admin/PaymentMethod/payment-method-crear/payment-method-crear.component';
import { PaymentMethodListarComponent } from './component/Admin/PaymentMethod/payment-method-listar/payment-method-listar.component';
import { TypeOfFoodComponent } from './component/Admin/TypeOfFood/type-of-food/type-of-food.component';
import { TypeOfFoodCrearComponent } from './component/Admin/TypeOfFood/type-of-food-crear/type-of-food-crear.component';
import { TypeOfFoodListarComponent } from './component/Admin/TypeOfFood/type-of-food-listar/type-of-food-listar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    NavbarDonanteComponent,
    NavbarPrincipalComponent,
    DonarComponent,
    SobreNosotrosComponent,
    ContactenosComponent,
    HolaIniciaSesionComponent,
    PrincipalComponent,
    FooterPrincipalComponent,
    FooddonationbydonorComponent,
    FooddonationComponent,
    FooddonationbydonorCrearComponent,
    FooddonationbydonorListarComponent,
    FooddonationCrearComponent,
    FooddonationListarComponent,
    TransactionvoucherComponent,
    TransactionvoucherCrearComponent,
    TransactionvoucherListarComponent,
    PaymentMethodComponent,
    PaymentMethodCrearComponent,
    PaymentMethodListarComponent,
    TypeOfFoodComponent,
    TypeOfFoodCrearComponent,
    TypeOfFoodListarComponent,

//colocar tus componentes que creas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule, 
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatMomentDateModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
