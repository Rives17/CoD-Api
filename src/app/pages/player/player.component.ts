import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, map, switchMap, timeout } from 'rxjs/operators';

import { StatsService } from '../../services/stats.service';
import { Br } from '../../interfaces/player.interface';
import { Summary, Match } from '../../interfaces/matches.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  public players: Br[] = [];
  public matches: Match[] = [];
  public summary: Summary[] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private statsService: StatsService) { }



  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({gametarg, platform}) => this.statsService.getPlayer(gametarg, platform))
    )
      .subscribe(resp => {
        console.log(resp);
        this.players.push(resp.br_all)
      });

    this.activatedRoute.params
    .pipe(
      delay(1500),
      switchMap( ({gametarg, platform}) => this.statsService.getMatches(gametarg, platform))
    )
    .subscribe( resp => {
      console.log(resp);

      this.matches = resp.matches
      this.summary.push(resp.summary)
    }) ;


  }


}
