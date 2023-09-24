import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerBillDataComponent } from './customer-bill-data/customer-bill-data.component';
import { AddCustomerCsvComponent } from './add-customer-csv/add-customer-csv.component';
import { AddCustomerManualComponent } from './add-customer-manual/add-customer-manual.component';
import { LoginComponent } from './login/login.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { TransactionTrakingComponent } from './transaction-traking/transaction-traking.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'customer-bill-data',component:CustomerBillDataComponent},
  {path:'add-customer-manual',component:AddCustomerManualComponent},
  {path:'add-customer-csv',component:AddCustomerCsvComponent},
  {path:'viewbill/:id',component:ViewBillComponent},
  {path:'transaction-tracking',component:TransactionTrakingComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
