import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PLANETS } from '../mock-planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets = PLANETS;
  
  constructor() { }

  ngOnInit() {
  }
  
  selectedPlanet: Planet;

   onSelect(planet: Planet): void {
      this.selectedPlanet = planet;
   }
}
