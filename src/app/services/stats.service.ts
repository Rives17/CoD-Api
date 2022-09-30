import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PlayerStats } from '../interfaces/player.interface';
import { LastMatches } from '../interfaces/matches.interface';

@Injectable({
  providedIn: 'root'
})


export class StatsService {
  private apiUrl: string = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone';
  private matchesUrl: string = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches';

  constructor(private http: HttpClient) {}

    getPlayer(gametarg: string, platform: any): Observable<PlayerStats> {

      const url = `${this.apiUrl}/${gametarg.replace('#', '%2523')}/${platform}`;
      return this.http.get<PlayerStats>( url,
      {
        headers: {
          'X-RapidAPI-Key': '8ac248a33cmsh51ae540668dde23p1a104cjsn126481429d5e',
          'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
        }
      })

    };

    getMatches(gametarg: string, platform: any): Observable<LastMatches> {

      const url = `${this.matchesUrl}/${gametarg.replace('#', '%2523')}/${platform}`;
      return this.http.get<LastMatches>( url,
      {
        headers: {
          'X-RapidAPI-Key': '8ac248a33cmsh51ae540668dde23p1a104cjsn126481429d5e',
          'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
        }
      })
    };

}
