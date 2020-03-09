import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ApiService } from 'src/services/ApiService';
import { MatchDetail, Summoner } from 'src/dtos/Entities';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  summonerName = '';
  soloq = true;
  flex = true;
  summoner: Summoner

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSummonerSet(event: any) {
    this.summonerName = event.target.value;
  }

  soloqChange(event:MatCheckboxChange): void {
    this.soloq = event.checked;
  }

  flexChange(event:MatCheckboxChange): void {
    this.flex = event.checked;
  }

  onClickSearch() {
    this.apiService.getSummoner(this.summonerName).subscribe(
      (data: Summoner) => { 
        this.summoner = data;
        console.log(data);
        this.router.navigate(['/Summoner', this.summonerName], { queryParams: { soloq: this.soloq, flex: this.flex, accountId: this.summoner.accountId, page: 0 } });
      }
    );
  }

}
