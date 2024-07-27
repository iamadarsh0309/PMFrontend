import { BillOfMaterialItem } from "./bill-of-material-item";

// service-record.model.ts
export interface ServiceRecord {
  id: number;
  vehicleId: number;
  serviceAdvisorId: number;
  serviceDate: Date;
  status: string; // e.g., 'Pending', 'Completed'
  billOfMaterials: BillOfMaterialItem[];
}
