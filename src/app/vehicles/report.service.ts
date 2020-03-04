import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
//import 'rxjs/add/observable/of';

@Injectable()
export class ReportService {

    defaultUrl: string ='https://localhost:44361/';
    constructor(private _httpClient: HttpClient, private _router: Router) {

    }

    getReports(id: string): Observable<Report[]> {
        return this._httpClient.get<Report[]>(this.defaultUrl + 'api/Reports/' + id);
    }

    deleteReport(id: number) {
        return this._httpClient.delete<void>(this.defaultUrl +'api/Reports/' + id);
    }
    createReport(report: Report, vehId: string): Observable<Report> {
        console.log('hello from reposrt.service.ts');
        return this._httpClient.post<Report>(this.defaultUrl + 'api/Reports?vehId='+vehId, report, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
    editReport(report: Report): Observable<Report> {
        console.log('hello from edit in report.service.ts');
        return this._httpClient.put<Report>(this.defaultUrl +'api/Reports', report, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }


}