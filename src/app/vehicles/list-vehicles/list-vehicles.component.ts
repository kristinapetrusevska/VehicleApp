import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehicles: Vehicle[];
  vehicle: Vehicle;
  del: boolean = false;
  constructor(private _vehicleService: VehicleService, private _dataService: DataService) {

  }
  
  ngOnInit(): void {

    this._dataService.currentRefreshList.subscribe(
      (d) => {
      this.del = d,
        this.getVehicles()
      }
    );

    this.getVehicles();

  }

  details(id: string) {
    this._vehicleService.getVehicle(id).subscribe(
      (veh: Vehicle) => { this.vehicle = veh },
      (error: any) => { console.log('error: ' + error) },
      () => {
        this._dataService.changeVehicle(this.vehicle);        
        this._dataService.changeRefreshList(false);
      });
  }
  getVehicles() {
    this._vehicleService.getVehicles().subscribe((vehicleList) => { this.vehicles = vehicleList });
  }
}
