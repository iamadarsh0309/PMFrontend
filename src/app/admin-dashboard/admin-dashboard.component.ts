import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { Vehicle } from '../model/vehicle';
import { ServiceRepresentative } from '../model/service-representative'; // Make sure this model is defined
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dueVehicles: Vehicle[] = [];
  underServiceVehicles: Vehicle[] = [];
  servicedVehicles: Vehicle[] = [];
  serviceAdvisors: ServiceRepresentative[] = [];
  selectedServiceAdvisorId: number | null = null;
  errorMessage: string = '';
  vehicles: any[] = [];
  error: string | null = null;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
    this.loadServiceAdvisors();
  }

  loadVehicles() {
    this.vehicleService.getDueForServicing().subscribe(
      data => this.dueVehicles = data,
      error => this.errorMessage = error
    );
    this.vehicleService.getUnderServicing().subscribe(
      data => this.underServiceVehicles = data,
      error => this.errorMessage = error
    );
    this.vehicleService.getServicedVehicles().subscribe(
      data => this.servicedVehicles = data,
      error => this.errorMessage = error
    );
    this.vehicleService.getVehicles().subscribe(
      data => {
        this.vehicles = data;
        this.error = null;
      },
      error => {
        console.error('Error loading vehicles', error);
        this.error = 'Something went wrong while loading vehicles.';
      }
  }

  loadServiceAdvisors() {
    this.vehicleService.getServiceAdvisors().subscribe(
      (      data: ServiceRepresentative[]) => this.serviceAdvisors = data,
      (      error: string) => this.errorMessage = error
    );
  }

  scheduleService(vehicleId: number, serviceAdvisorId: number | null) {
  if (serviceAdvisorId !== null) {
    this.vehicleService.scheduleService(vehicleId, serviceAdvisorId).subscribe(
      (response: any) => {
        console.log('Service scheduled successfully', response);
        this.loadVehicles();  // Reload the vehicle lists after scheduling
      },
      (error: HttpErrorResponse) => this.errorMessage = error.message
    );
  } else {
    this.errorMessage = 'Please select a service advisor.';
  }
}


  printInvoice(vehicleId: number) {
    this.vehicleService.printInvoice(vehicleId).subscribe(
      response => {
        console.log('Invoice printed successfully', response);
        // Add logic to handle the invoice, e.g., downloading or displaying it
      },
      error => this.errorMessage = error
    );
  }
}
