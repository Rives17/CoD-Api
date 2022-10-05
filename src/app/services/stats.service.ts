import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PlayerStats } from '../interfaces/player.interface';
import { LastMatches } from '../interfaces/matches.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class StatsService {
  private apiUrl: string = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone';
  private matchesUrl: string = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches';
  private headers = new HttpHeaders(environment.apiKey);

  constructor(private http: HttpClient) {}

    getPlayer(gametarg: string, platform: any): Observable<PlayerStats> {

      const url = `${this.apiUrl}/${gametarg.replace('#', '%2523')}/${platform}`;
      return this.http.get<PlayerStats>( url, {headers: this.headers})

    };

    getMatches(gametarg: string, platform: any): Observable<LastMatches> {

      const url = `${this.matchesUrl}/${gametarg.replace('#', '%2523')}/${platform}`;
      return this.http.get<LastMatches>( url, {headers: this.headers})
    };

}
