import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner, SummonerMatch } from 'src/dtos/Entities';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getSummonerMatches(summonerName: string, queues: number[], page: number) { 
        console.log("Calling service: " + 'https://lol-stats-api.herokuapp.com/api/Summoner/' + summonerName + '/Matches?queues=420&queues=440&page=' + page)
        return this.http.get<Array<SummonerMatch>>('https://lol-stats-api.herokuapp.com/api/Summoner/' + summonerName + '/Matches?queues=420&queues=440&page=' + page)
    }

    getSummoner(summonerName: string) {
        console.log("Calling service: " + 'https://lol-stats-api.herokuapp.com/api/Riot/Summoner/' + summonerName)
        return this.http.get<Summoner>('https://lol-stats-api.herokuapp.com/api/Riot/Summoner/' + summonerName)
    }
}