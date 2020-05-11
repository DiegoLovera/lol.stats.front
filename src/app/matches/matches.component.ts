import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/ApiService';
import { SummonerMatch } from 'src/dtos/Entities';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  sub: Subscription;

  summonerName = '';
  soloq = true;
  flex = true;
  page = 0;
  accountId = '';
  summonerMatches: Array<SummonerMatch>;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _apiService: ApiService) {
      
    this.getSummonerMatches(); 
  }

  ngOnInit(): void {
  }

  getSummonerMatches = () => {
    this.summonerMatches = new Array<SummonerMatch>();
    this._Activatedroute.paramMap.subscribe(params1 => {
      this.summonerName = params1.get('summonerName');
      this._Activatedroute.queryParamMap
        .subscribe(params => {
          this.soloq = JSON.parse(params.get('soloq'));
          this.flex = JSON.parse(params.get('flex'));
          this.accountId = params.get('accountId');
          this.page = JSON.parse(params.get('page'));
          this._apiService.getSummonerMatches(this.summonerName, null, this.page)
            .subscribe(
              (data: Array<SummonerMatch>) => {
                this.summonerMatches = data;
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
