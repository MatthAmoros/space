import { Component, OnInit } from '@angular/core';
import { Planet } from '../libs/planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets : Planet[];
  selectedPlanet: Planet;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(): void {
  this.planetService.getPlanets()
                    .subscribe(planets =>
                    this.planets = planets);
  }
}
