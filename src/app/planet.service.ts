import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Planet } from './planet';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planetsUri = 'api/planets';  // URL to web api
  private _planets: Planet[];



  constructor(
    private http:HttpClient,
    private communicationService:CommunicationService) {
      this.getPlanets().subscribe(planets => this._planets = planets);
    }

  public getPlanets() : Observable<Planet[]> {
    this.communicationService.add("Discovered new planets !");
    return this.http.get<Planet[]>(this.planetsUri).pipe(
      catchError(this.handleError('getPlanets', []))
    );
  }

  public getPlanet(id: number): Observable<Planet> {
    // TODO: send the message _after_ fetching the Planet
    this.communicationService.add(`Getting planet information...`);
    return of(this._planets.find(planet => planet.id === id));
  }

  public updatePlanet (planet: Planet): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.planetsUri, planet, httpOptions).pipe(
      tap(_ => this.log(`Capturing ${planet.name}`)),
      catchError(this.handleError<any>('updatePlanet'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  
  private log(message: string) {
    this.communicationService.add('Planet : ' + message);
  }
}
