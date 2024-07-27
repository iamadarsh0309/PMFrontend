// vehicle.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicle } from '../model/vehicle';
import { Injectable } from '@angular/core';
import { ServiceRepresentative } from '../model/service-representative';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  getScheduledVehicles() {
    throw new Error('Method not implemented.');
  }
  getServiceAdvisors(): Observable<ServiceRepresentative[]> {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://localhost:7029/api';  // Your backend URL

  constructor(private http: HttpClient) {}

  getDueForServicing(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles/due-for-servicing`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUnderServicing(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles/under-servicing`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getServicedVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles/serviced`)
      .pipe(
        catchError(this.handleError)
      );
  }

  scheduleService(vehicleId: number, serviceAdvisorId: number): Observable<any> {
    const url = `${this.apiUrl}/vehicles/schedule-service`;
    const body = { vehicleId, serviceAdvisorId };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  printInvoice(vehicleId: number): Observable<any> {
    const url = `${this.apiUrl}/vehicles/${vehicleId}/print-invoice`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
