import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/mock.data.service';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { PlanetDetailComponent } from './views/planet-detail/planet-detail.component';
import { CommunicationComponent } from './views/communication/communication.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { DrawingsurfaceComponent } from './views/drawingsurface/drawingsurface.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { PlanetViewComponent } from './views/planet-view/planet-view.component';
import { HeaderComponent } from './partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    CommunicationComponent,
    DashboardComponent,
    LoginComponent,
    DrawingsurfaceComponent,
    NavigationComponent,
    PlanetViewComponent,
    HeaderComponent
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
