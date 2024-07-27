// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ServiceAdvisorDashboardComponent } from './service-advisor-dashboard/service-advisor-dashboard.component';
import { HomePageComponent } from '../app/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ServiceAdvisorDashboardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }