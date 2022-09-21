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
  private headers = new Headers();

  constructor(private http: HttpClient) {
   }

    getPlayer(gametarg: string, platform: any): Observable<PlayerStats> {

      return this.http.get<PlayerStats>(`${this.apiUrl}/${gametarg.replace('#', '%2523')}/${platform}`,
      {
        headers: {
          'X-RapidAPI-Key': '8ac248a33cmsh51ae540668dde23p1a104cjsn126481429d5e',
          'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
        }
      })
    };

    getMatches(gametarg: string, platform: any): Observable<LastMatches> {

      return this.http.get<LastMatches>(`${this.matchesUrl}/${gametarg.replace('#', '%2523')}/${platform}`, {
        headers: {
          'X-RapidAPI-Key': '8ac248a33cmsh51ae540668dde23p1a104cjsn126481429d5e',
          'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
        }
      })
    };

}
