import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { Vehicle } from '../model/vehicle';
import { BillOfMaterialItem } from '../model/bill-of-material-item';

@Component({
  selector: 'app-service-advisor-dashboard',
  templateUrl: './service-advisor-dashboard.component.html',
  styleUrls: ['./service-advisor-dashboard.component.css']
})
export class ServiceAdvisorDashboardComponent implements OnInit {
  scheduledVehicles: Vehicle[] = [];
  selectedVehicleId: number | undefined;
  billOfMaterials: BillOfMaterialItem[] = [];
  newItem: BillOfMaterialItem = { item: '', quantity: 1, cost: 0 };

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getScheduledVehicles().subscribe((data: Vehicle[]) => {
      this.scheduledVehicles = data;
    });
  }

  addBillOfMaterial() {
    this.billOfMaterials.push({ ...this.newItem });
    this.newItem = { item: '', quantity: 1, cost: 0 };
  }

  completeService() {
    // Logic to mark the service as complete
  }
}