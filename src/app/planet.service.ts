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
}
