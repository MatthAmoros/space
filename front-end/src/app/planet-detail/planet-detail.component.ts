import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../libs/planet';
import { PlanetService } from '../planet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet;
  constructor(private route: ActivatedRoute,
  private planetService: PlanetService,
  private location: Location) { }

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanet(id)
      .subscribe(planet => this.planet = planet);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.planetService.updatePlanet(this.planet)
     .subscribe(() => this.goBack());
  }
}
