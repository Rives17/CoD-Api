import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'express-validator';
import { map, switchMap } from 'rxjs/operators';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public gametarg: string = '';


  constructor(private activatedRoute: ActivatedRoute,
              private statsService: StatsService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( params => {
        const gametarg: any = params['gametarg'];

        this.gametarg = gametarg
        console.log(gametarg)
      })
  }

}
