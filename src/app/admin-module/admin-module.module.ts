import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './AdminComponent/dashboard/dashboard.component';
import { ProductCreationComponent } from './AdminComponent/product-creation/product-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    ProductCreationComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    NgChartsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
