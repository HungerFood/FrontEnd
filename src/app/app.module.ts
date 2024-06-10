import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar tus componentes
import { FooterPrincipalComponent } from './component/Footer/footer-principal/footer-principal.component';
import { NavbarAdminComponent } from './component/Navbar/Navbar-Admin/navbar-admin/navbar-admin.component';
import { NavbarDonanteComponent } from './component/Navbar/Navbar-Donante/navbar-donante/navbar-donante.component';
import { NavbarPrincipalComponent } from './component/Navbar/Navbar-Principal/navbar-principal/navbar-principal.component';
import { ContactenosComponent } from './component/Principal/contactenos/contactenos.component';
import { DonarComponent } from './component/Principal/donar/donar.component';
import { HolaIniciaSesionComponent } from './component/Principal/hola-inicia-sesion/hola-inicia-sesion.component';
import { PrincipalComponent } from './component/Principal/principal/principal.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros.component';

//importar los modulos de angular material
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentMethodCrearComponent } from './component/Admin/PaymentMethod/payment-method-crear/payment-method-crear.component';
import { PaymentMethodListarComponent } from './component/Admin/PaymentMethod/payment-method-listar/payment-method-listar.component';
import { PaymentMethodComponent } from './component/Admin/PaymentMethod/payment-method/payment-method.component';
import { TypeOfFoodCrearComponent } from './component/Admin/TypeOfFood/type-of-food-crear/type-of-food-crear.component';
import { TypeOfFoodListarComponent } from './component/Admin/TypeOfFood/type-of-food-listar/type-of-food-listar.component';
import { TypeOfFoodComponent } from './component/Admin/TypeOfFood/type-of-food/type-of-food.component';
import { ContentComponent } from './component/Principal/content/content.component';
import { DonacionAlimentoComponent } from './component/Principal/donacion-alimento/donacion-alimento.component';
import { DonacionEconomicaComponent } from './component/Principal/donacion-economica/donacion-economica.component';
import { MAINComponent } from './component/Principal/main/main.component';
import { TestimoniosComponent } from './component/Principal/testimonios/testimonios.component';
import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { FooddonationListarComponent } from './component/User/FoodDonation/fooddonation-listar/fooddonation-listar.component';
import { FooddonationComponent } from './component/User/FoodDonation/fooddonation/fooddonation.component';
import { FooddonationbydonorCrearComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor-crear/fooddonationbydonor-crear.component';
import { FooddonationbydonorListarComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor-listar/fooddonationbydonor-listar.component';
import { FooddonationbydonorComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor/fooddonationbydonor.component';
import { PerfilComponent } from './component/User/Perfil/perfil/perfil.component';
import { PerfilDatosComponent } from './component/User/PerfilDatos/perfil-datos/perfil-datos.component';
import { RegistrarseComponent } from './component/User/Registrarse/registrarse/registrarse.component';
import { TransactionvoucherCrearComponent } from './component/User/TransactionVoucher/transactionvoucher-crear/transactionvoucher-crear.component';
import { TransactionvoucherListarComponent } from './component/User/TransactionVoucher/transactionvoucher-listar/transactionvoucher-listar.component';
import { TransactionvoucherComponent } from './component/User/TransactionVoucher/transactionvoucher/transactionvoucher.component';
import { MoneyDonationComponent } from './component/User/MoneyDonation/money-donation/money-donation.component';
import { MoneyDonationCrearComponent } from './component/User/MoneyDonation/money-donation-crear/money-donation-crear.component';



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
    TestimoniosComponent,
    MAINComponent,
    ContentComponent,
    DonacionAlimentoComponent,
    DonacionEconomicaComponent,
    RegistrarseComponent,
    PerfilComponent,
    PerfilDatosComponent,
    MoneyDonationComponent,
    MoneyDonationCrearComponent,

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
    MatSelectModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
