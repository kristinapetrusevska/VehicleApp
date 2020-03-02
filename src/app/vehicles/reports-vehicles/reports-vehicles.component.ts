import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { Report } from 'src/app/models/report.model';
import { ReportService } from '../report.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reports-vehicles',
  templateUrl: './reports-vehicles.component.html',
  styleUrls: ['./reports-vehicles.component.css']
})
export class ReportsVehiclesComponent implements OnInit {
  @ViewChild('reportForm') public reportForm: NgForm;
  report: Report = {
    id: null,
    reportText: null
  };
  vehicle: Vehicle;
  show : boolean = false;
  reports: Report[];
  constructor(private _dataService: DataService, private _reportService: ReportService) { }

  ngOnInit(): void {

    this._dataService.currentVehicle.subscribe(
      (d) => { this.vehicle = d, this.getReports() },
      (error) => { },
      () => { console.log('blabla') }
    );

  }
  getReports() {
    if (this, this.vehicle != null)
      this._reportService.getReports(this.vehicle.id).subscribe(d => this.reports = d);
  }
  deleteReport(id: number) {
    this._reportService.deleteReport(id).subscribe(
      () => { },
      (error: any) => { console.log('error:' + error) },
      () => {
        console.log('Successfully deleted report from server with id: ' + id),
          this.getReports();
      }
    );
  }
  createReport(){
      this.show=!this.show;
  }

  saveReport(){
    this._reportService.createReport(this.report,this.vehicle.id).subscribe(
      (data) => { this.report = data },
      (error) => { console.log(error) },
      () => {
        this.reportForm.reset();
        this.show = !this.show;
        this.getReports();


      }
    );
  }


}
