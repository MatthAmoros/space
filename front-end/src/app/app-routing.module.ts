import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './views/planets/planets.component'
import { PlanetDetailComponent } from './views/planet-detail/planet-detail.component'
import { DashboardComponent }   from './views/dashboard/dashboard.component';
import { DrawingsurfaceComponent }   from './views/drawingsurface/drawingsurface.component';
import { LoginComponent }   from './views/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
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
