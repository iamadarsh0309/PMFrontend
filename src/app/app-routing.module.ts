// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ServiceAdvisorDashboardComponent } from './service-advisor-dashboard/service-advisor-dashboard.component';
import { HomePageComponent } from '../app/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'service-advisor', component: ServiceAdvisorDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }