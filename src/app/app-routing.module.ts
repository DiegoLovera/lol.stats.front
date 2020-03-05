import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MatchesComponent } from './matches/matches.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'Summoner/:summonerName', component: MatchesComponent},
  { path: 'Summoner/:summonerName/Stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
