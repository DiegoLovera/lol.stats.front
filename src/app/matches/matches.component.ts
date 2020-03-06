import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/services/ApiService';
import { MatchDetail } from 'src/dtos/Entities';

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
  summonerMatches: Array<MatchDetail>;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _apiService: ApiService) { }

  sub;

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.summonerName = params.get('summonerName');
    });
    this._Activatedroute.queryParamMap
      .subscribe(params => {
        this.soloq = JSON.parse(params.get('soloq'));
        this.flex = JSON.parse(params.get('flex'));
        this.accountId = params.get('accountId');
        this.getSummonerMatches(this.summonerName, this.page);
      });
  }

  getSummonerMatches(summonerName: string, page: number) {
    this._apiService.getSummonerMatches(summonerName, null, page)
      .subscribe(
        (data: Array<MatchDetail>) => { 
          this.summonerMatches = data;
          console.log(data);
        }
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['']);
  }

}
