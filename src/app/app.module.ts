import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVehiclesComponent } from './vehicles/list-vehicles/list-vehicles.component';
import { VehicleService } from './vehicles/vehicle.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DetailsVehiclesComponent } from './vehicles/details-vehicles/details-vehicles.component';
import { DataService } from './data.service';
import { CreateVehiclesComponent } from './vehicles/create-vehicles/create-vehicles.component';
import { EditVehiclesComponent } from './vehicles/edit-vehicles/edit-vehicles.component';
import { SearchVehiclesComponent } from './vehicles/search-vehicles/search-vehicles.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserService } from './users/user.service';
import { HomeComponent } from './home/home.component';
import { UserSingletonService } from './user-singleton.service';
import { TextComponent } from './text/text.component';
import { ReportsVehiclesComponent } from './vehicles/reports-vehicles/reports-vehicles.component';
import { ReportService } from './vehicles/report.service';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ListVehiclesComponent,
    DetailsVehiclesComponent,
    CreateVehiclesComponent,
    EditVehiclesComponent,
    SearchVehiclesComponent,
    UserLoginComponent,
    HomeComponent,
    TextComponent,
    ReportsVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQVsdCBHs5tajaROyhHkejQ0hcvyx1gbo'
    })
  ],
  providers: [VehicleService, HttpClient, DataService, UserService,UserSingletonService,ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
