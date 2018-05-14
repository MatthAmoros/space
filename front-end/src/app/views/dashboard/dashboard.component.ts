import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }
}
