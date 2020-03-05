import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  summonerName = '';
  soloq = true;
  flex = true;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router) { }

  sub;

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.summonerName = params.get('summonerName');
    });
    this._Activatedroute.queryParamMap
      .subscribe(params => {

        this.soloq = JSON.parse(params.get('soloq'));
        this.flex = JSON.parse(params.get('flex'));
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['']);
  }

}
