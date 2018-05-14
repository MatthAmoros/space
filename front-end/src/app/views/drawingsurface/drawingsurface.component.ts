import * as d3 from 'd3';
import { Component, AfterContentInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-drawingsurface',
  templateUrl: './drawingsurface.component.html',
  styleUrls: ['./drawingsurface.component.css']
})
export class DrawingsurfaceComponent implements AfterContentInit {
  planets: Planet[] = [];
  radius = 10;

  constructor(private planetService: PlanetService) { }

  // https://d3js.org/

  //On ready
  ngAfterContentInit() {
    this.planetService.getPlanets()
      .subscribe(planets =>
        for (var planet in planets) {
          this.drawTarget(planets[planet].location, planets[planet].stats.space / 300, planets[planet].name);
        }
        d3.select('svg').transition()
          .style("background-color", "black");
        this.planets = planets;);
  }

  colorMe() {
    d3.select('button').style('color', 'red');
  }

  drawTarget(location: any, radius: number, name: string) {
    d3.select('svg').append('circle')
      .attr('cx', (location.x * 10) + 200)
      .attr('cy', (location.y * 10) + 200)
      .attr('r', () => {
        return radius;
      })
      .text(() => { return name;})
      .attr('fill', 'steelblue');
  }

  scalePlanet(location: any, radius: number) {

  }

  clicked(event: any) {

  }
}
