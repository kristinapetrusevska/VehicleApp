import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
//import 'rxjs/add/observable/of';

@Injectable()
export class ReportService {


    constructor(private _httpClient: HttpClient, private _router: Router) {

    }

    getReports(id: string): Observable<Report[]> {
        return this._httpClient.get<Report[]>('https://localhost:44361/api/Reports/' + id);
    }

    deleteReport(id: number) {
        return this._httpClient.delete<void>('https://localhost:44361/api/Reports/' + id);
    }
    createReport(report: Report, vehId: string): Observable<Report> {
        console.log('hello from reposrt.service.ts');
        return this._httpClient.post<Report>('https://localhost:44361/api/Reports?vehId='+vehId, report, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }


}