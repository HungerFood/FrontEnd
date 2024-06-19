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

//importar los modulos de angular material
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelect, MatSelectModule } from '@angular/material/select';
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
import { DialogComponent } from './component/Admin/TypeOfFood/type-of-food-listar/dialog/dialog.component';
import { TypeOfFoodListarComponent } from './component/Admin/TypeOfFood/type-of-food-listar/type-of-food-listar.component';
import { TypeOfFoodComponent } from './component/Admin/TypeOfFood/type-of-food/type-of-food.component';
import { MainAdmComponent } from './component/Admin/main-adm/main-adm.component';
import { ContentComponent } from './component/Principal/content/content.component';
import { DonacionAlimentoComponent } from './component/Principal/donacion-alimento/donacion-alimento.component';
import { DonacionEconomicaComponent } from './component/Principal/donacion-economica/donacion-economica.component';
import { MAINComponent } from './component/Principal/main/main.component';
import { TestimoniosComponent } from './component/Principal/testimonios/testimonios.component';
import { FooddonationCrearComponent } from './component/User/FoodDonation/fooddonation-crear/fooddonation-crear.component';
import { DialogoFoodListarComponent } from './component/User/FoodDonation/fooddonation-listar/dialogo-food-listar/dialogo-food-listar.component';
import { FooddonationListarComponent } from './component/User/FoodDonation/fooddonation-listar/fooddonation-listar.component';
import { FooddonationComponent } from './component/User/FoodDonation/fooddonation/fooddonation.component';
import { FooddonationbydonorCrearComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor-crear/fooddonationbydonor-crear.component';
import { FooddonationbydonorListarComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor-listar/fooddonationbydonor-listar.component';
import { FooddonationbydonorComponent } from './component/User/FoodDonationByDonor/fooddonationbydonor/fooddonationbydonor.component';
import { MoneyDonationCrearComponent } from './component/User/MoneyDonation/money-donation-crear/money-donation-crear.component';
import { DialogoMoneyListarComponent } from './component/User/MoneyDonation/money-donation-listar/dialogo-money-listar/dialogo-money-listar.component';
import { MoneyDonationListarComponent } from './component/User/MoneyDonation/money-donation-listar/money-donation-listar.component';
import { MoneyDonationComponent } from './component/User/MoneyDonation/money-donation/money-donation.component';
import { PerfilListarComponent } from './component/User/Perfil/perfil-listar/perfil-listar.component';
import { PerfilComponent } from './component/User/Perfil/perfil/perfil.component';
import { RegistrarseComponent } from './component/User/Registrarse/registrarse/registrarse.component';
import { TransactionvoucherCrearComponent } from './component/User/TransactionVoucher/transactionvoucher-crear/transactionvoucher-crear.component';
import { TransactionvoucherListarComponent } from './component/User/TransactionVoucher/transactionvoucher-listar/transactionvoucher-listar.component';
import { TransactionvoucherComponent } from './component/User/TransactionVoucher/transactionvoucher/transactionvoucher.component';
import { LoginComponent } from './component/Login/login/login.component';
import { MisionComponent } from './component/Principal/sobre-nosotros/mision/mision.component';
import { SobreNosotrosComponent } from './component/Principal/sobre-nosotros/sobre-nosotros/sobre-nosotros.component';
import { VisionComponent } from './component/Principal/sobre-nosotros/vision/vision.component';
import { FundadoresComponent } from './component/Principal/sobre-nosotros/fundadores/fundadores.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    NavbarDonanteComponent,
    NavbarPrincipalComponent,
    DonarComponent,
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
    DialogComponent,
    MainAdmComponent,
    MoneyDonationComponent,
    MoneyDonationCrearComponent,
    PerfilComponent,
    RegistrarseComponent,
    MoneyDonationListarComponent,
    PerfilListarComponent,
    DialogoFoodListarComponent,
    DialogoMoneyListarComponent,
    LoginComponent,
    MisionComponent,
    SobreNosotrosComponent,
    VisionComponent,
    FundadoresComponent

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
    MatDialogContent,
    MatSelect,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
