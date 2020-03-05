import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  summonerName = '';
  soloq = true;
  flex = true;

  constructor(private router: Router) { }

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
    this.router.navigate(['/Summoner', this.summonerName], { queryParams: { soloq: this.soloq, flex: this.flex } });
  }

}
