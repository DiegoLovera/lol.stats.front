import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/ApiService';
import { SummonerMatch } from 'src/dtos/Entities';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  summonerName = '';
  soloq = true;
  flex = true;
  page = 0;
  accountId = '';
  summonerMatches: Array<SummonerMatch>;

  countApiCalls = 0;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _apiService: ApiService) {
    console.log("Constructor de Matches llamado");
    this.getSummonerMatches();
  }

  sub;

  ngOnInit(): void {
    //this.getSummonerMatches();
  }

  getSummonerMatches() {
    this.summonerMatches = new Array<SummonerMatch>();
    this.sub = this._Activatedroute.paramMap.subscribe(params1 => {
      console.log("Llamada con summoner: " + this.summonerName);
      this.summonerName = params1.get('summonerName');
      this._Activatedroute.queryParamMap
        .subscribe(params => {
          this.soloq = JSON.parse(params.get('soloq'));
          this.flex = JSON.parse(params.get('flex'));
          this.accountId = params.get('accountId');
          this.page = JSON.parse(params.get('page'));

          this.countApiCalls += 1;
          console.log("Llamadas al api: " + this.countApiCalls);
          this._apiService.getSummonerMatches(this.summonerName, null, this.page)
            .subscribe(
              (data: Array<SummonerMatch>) => {
                this.summonerMatches = data;
                console.log(data);
              }
            );
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['']);
  }

}
