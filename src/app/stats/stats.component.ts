import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/services/ApiService';
import { SummonerStats } from 'src/dtos/Entities';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  sub: Subscription;

  summonerName = '';
  soloq = true;
  flex = true;
  page = 0;
  accountId = '';
  summonerStats: SummonerStats = new SummonerStats();

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _apiService: ApiService) {

    this.getSummonerStats();
  }

  ngOnInit(): void { }

  getSummonerStats = () => {
    this._Activatedroute.paramMap.subscribe(params1 => {
      this.summonerName = params1.get('summonerName');
      this._Activatedroute.queryParamMap
        .subscribe(params => {
          this.soloq = JSON.parse(params.get('soloq'));
          this.flex = JSON.parse(params.get('flex'));
          this.accountId = params.get('accountId');
          this.page = JSON.parse(params.get('page'));
          this._apiService.getSummonerStats(this.summonerName)
            .subscribe(
              (data: SummonerStats) => {
                this.summonerStats = data;
                console.log(data);
              }
            );
        }).unsubscribe();
    });
  }

  onBack(): void {
    this._router.navigate(['']);
  }

}
