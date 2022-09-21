import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'

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
      switchMap( ({gametarg, platform}) => this.statsService.getMatches(gametarg, platform))
    )
    .subscribe( resp => {
      console.log(resp.matches);

      this.summary.push(resp.summary)
      this.matches = resp.matches
    });

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( ({gametarg, platform}) => this.statsService.getPlayer(gametarg, platform)),
    //     )
    //   .subscribe( (resp: { br: Br; }) => {
    //     console.log(resp.br);
    //     this.players.push(resp.br)
    //   });

  }

}
