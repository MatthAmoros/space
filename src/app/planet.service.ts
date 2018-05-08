import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { CommunicationService } from './communication.service';
import { PLANETS } from './mock-planets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private communicationService:CommunicationService) {}

  getPlanets() : Observable<Planet[]> {
    this.communicationService.add("Discovered new planets !");
    return of(PLANETS);
  }

  getPlanet(id: number): Observable<Planet> {
    // TODO: send the message _after_ fetching the Planet
    this.communicationService.add(`Getting planet information...`);
    return of(PLANETS.find(planet => planet.id === id));
  }
}
