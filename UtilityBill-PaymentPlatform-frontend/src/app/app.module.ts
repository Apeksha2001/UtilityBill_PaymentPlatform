import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerBillDataComponent } from './customer-bill-data/customer-bill-data.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddCustomerManualComponent } from './add-customer-manual/add-customer-manual.component';
import { AddCustomerCsvComponent } from './add-customer-csv/add-customer-csv.component';
import { LoginComponent } from './login/login.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { TransactionTrakingComponent } from './transaction-traking/transaction-traking.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CustomerBillDataComponent,
    AddCustomerManualComponent,
    AddCustomerCsvComponent,
    LoginComponent,
    ViewBillComponent,
    TransactionTrakingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
