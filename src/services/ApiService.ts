import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchDetail } from 'src/dtos/Entities';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getSummonerMatches(summonerName: string, queues: number[], page: number) { 
        console.log("Calling service")
        return this.http.get<Array<MatchDetail>>('http://35.226.66.153/api/Summoner/' + summonerName + '/Matches?queues=420&queues=440&page=' + page)
    }
}