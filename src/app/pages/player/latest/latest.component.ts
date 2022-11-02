import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';

import { StatsService } from '../../../services/stats.service';
import { Summary, Match } from '../../../interfaces/matches.interface';

@Component({
  selector: 'app-latets',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  public matches: Match[] = [];
  public summary: Summary[] = [];
  public wins: number = 0;


  constructor(private activatedRoute: ActivatedRoute,
              private statsService: StatsService) { }


  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      delay(1500),
      switchMap( ({gametarg, platform}) => this.statsService.getMatches(gametarg, platform))
    )
    .subscribe( resp => {
      console.log(resp);

      this.matches = resp.matches
      this.summary.push(resp.summary)

      for(let i = 0; i < resp.matches.length; i++) {
        if( resp.matches[i].playerStats.teamPlacement == 1) {
          this.wins += resp.matches[i].playerStats.teamPlacement
        }
      }
    }) ;

  }


}
