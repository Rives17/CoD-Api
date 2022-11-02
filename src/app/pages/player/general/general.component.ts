import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Br } from 'src/app/interfaces/player.interface';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public players: Br[] = [];

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
  }

}
