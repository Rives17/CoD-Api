import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  gametarg: string = '';
  platform: string = ''

  constructor(private statsService: StatsService,
              private router: Router){}

  radioChangeHandler(event: any){
    this.platform = event.target.value;
  }

  searchPlayer() {
    console.log(this.gametarg);
    console.log(this.platform);

    this.statsService.getPlayer(this.gametarg, this.platform),
    this.statsService.getMatches(this.gametarg, this.platform),
    this.router.navigate([`${this.gametarg.trim()}/${this.platform}`])
  };
}
