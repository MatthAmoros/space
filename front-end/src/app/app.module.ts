import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock.data.service';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { CommunicationComponent } from './communication/communication.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DrawingsurfaceComponent } from './drawingsurface/drawingsurface.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    CommunicationComponent,
    DashboardComponent,
    LoginComponent,
    DrawingsurfaceComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    /*
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
