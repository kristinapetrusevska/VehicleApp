import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.model';
import { Report } from 'src/app/models/report.model';
import { ReportService } from '../report.service';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  show: boolean = false;
  reports: Report[];
  constructor(private _dataService: DataService, private _reportService: ReportService) { }

  ngOnInit(): void {
    this.report = {
      id: null,
      reportText: null
    };
    this.getReports();
    this._dataService.currentVehicle.subscribe(
      (d) => { this.vehicle = d, this.getReports() },
      (error) => { },
      () => { }
    );
  }

  close(){
    this.show=!this.show;
    this.report = {
      id: null,
      reportText: null
    };
  }
  getReports() {
    if (this.vehicle != null)
      this._reportService.getReports(this.vehicle.id).subscribe(d => this.reports = d),this.report = {
        id: null,
        reportText: null
      };
  }

  deleteReport(id: number) {
    this._reportService.deleteReport(id).subscribe(
      () => { this.getReports(); },
      (error: any) => { console.log('error:' + error) },
      () => {
        this.getReports();
        console.log('Successfully deleted report from server with id: ' + id)
      }
    );
  }
  createReport() {
    this.show = !this.show;

  }
  editReport(report: Report) {
    this.show = !this.show;
    this.report = report;
  }

  saveReport() {
    if (this.report.id == null) {
      console.log('id is null it means it tries to create a new report!' + this.report.reportText)     
      this._reportService.createReport(this.report, this.vehicle.id).subscribe(
        (data) => { this.report = data, console.log('ok') },
        (error) => { console.log(error) },
        () => {
          this.reportForm.reset();
          this.show = !this.show;
          //this.report = null;
          this.getReports();
        }
      );
    } else {
      this._reportService.editReport(this.report).subscribe(
        (data) => { },
        (error) => { console.log(error) },
        () => {
          //this.report = null;
          this.show = !this.show;
          this.getReports();


        }
      );

    }
  }

}
