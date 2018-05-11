import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetsComponent} from './planets/planets.component'
import {PlanetDetailComponent} from './planet-detail/planet-detail.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent }   from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'planets', component: PlanetsComponent },
  { path: 'detail/:id', component: PlanetDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
