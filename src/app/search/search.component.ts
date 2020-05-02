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
  soloq = true;
  flex = true;
  summoner: Summoner

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  onEnter(event: any) {
    this.onClickSearch(event);
  }

  onSummonerSet(event: any) {
    //this.summonerName = event.target.value;
  }

  soloqChange(event:MatCheckboxChange): void {
    this.soloq = event.checked;
  }

  flexChange(event:MatCheckboxChange): void {
    this.flex = event.checked;
  }

  onClickSearch(summonerName: string) {
    this.apiService.getSummoner(summonerName).subscribe(
      (data: Summoner) => { 
        this.summoner = data;
        console.log(data);
        this.router.navigate(['/Summoner', summonerName], { queryParams: { soloq: this.soloq, flex: this.flex, accountId: this.summoner.accountId, page: 0 } });
      }
    );
  }

}
