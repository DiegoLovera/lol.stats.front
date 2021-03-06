export interface Summoner {
    id:            string;
    accountId:     string;
    puuid:         string;
    name:          string;
    profileIconId: number;
    revisionDate:  number;
    summonerLevel: number;
}

export interface MatchDetail {
    gameId:                number;
    platformId:            string;
    gameCreation:          number;
    gameDuration:          number;
    queueId:               number;
    mapId:                 number;
    seasonId:              number;
    gameVersion:           string;
    gameMode:              GameMode;
    gameType:              GameType;
    teams:                 Team[];
    participants:          Participant[];
    participantIdentities: ParticipantIdentity[];
}

export interface SummonerMatch {
    gameId:             number;
    platformId:         string;
    gameCreation:       number;
    gameDuration:       number;
    queueId:            number;
    mapId:              number;
    seasonId:           number;
    gameVersion:        string;
    gameMode:           string;
    gameType:           string;
    alliedTeam:         Team;
    enemyTeam:          Team;
    currentParticipant: SummonerParticipant;
    allies:             SummonerParticipant[];
    enemies:            SummonerParticipant[];
}

export interface SummonerParticipant {
    participant:         Participant;
    participantIdentity: ParticipantIdentity;
    championName:        string;
    championImage:       string;
}

export enum GameMode {
    Classic = "CLASSIC",
}

export enum GameType {
    MatchedGame = "MATCHED_GAME",
}

export interface ParticipantIdentity {
    participantId: number;
    player:        Player;
}

export interface Player {
    platformId:        string;
    accountId:         string;
    summonerName:      string;
    summonerId:        string;
    currentPlatformId: string;
    currentAccountId:  string;
    matchHistoryUri:   string;
    profileIcon:       number;
}

export interface Participant {
    participantId: number;
    teamId:        number;
    championId:    number;
    spell1Id:      number;
    spell2Id:      number;
    stats:         Stats;
    timeline:      Timeline;
}

export interface Stats {
    participantId:                   number;
    win:                             boolean;
    item0:                           number;
    item1:                           number;
    item2:                           number;
    item3:                           number;
    item4:                           number;
    item5:                           number;
    item6:                           number;
    kills:                           number;
    deaths:                          number;
    assists:                         number;
    largestKillingSpree:             number;
    largestMultiKill:                number;
    killingSprees:                   number;
    longestTimeSpentLiving:          number;
    doubleKills:                     number;
    tripleKills:                     number;
    quadraKills:                     number;
    pentaKills:                      number;
    unrealKills:                     number;
    totalDamageDealt:                number;
    magicDamageDealt:                number;
    physicalDamageDealt:             number;
    trueDamageDealt:                 number;
    largestCriticalStrike:           number;
    totalDamageDealtToChampions:     number;
    magicDamageDealtToChampions:     number;
    physicalDamageDealtToChampions:  number;
    trueDamageDealtToChampions:      number;
    totalHeal:                       number;
    totalUnitsHealed:                number;
    damageSelfMitigated:             number;
    damageDealtToObjectives:         number;
    damageDealtToTurrets:            number;
    visionScore:                     number;
    timeCCingOthers:                 number;
    totalDamageTaken:                number;
    magicalDamageTaken:              number;
    physicalDamageTaken:             number;
    trueDamageTaken:                 number;
    goldEarned:                      number;
    goldSpent:                       number;
    turretKills:                     number;
    inhibitorKills:                  number;
    totalMinionsKilled:              number;
    neutralMinionsKilled:            number;
    neutralMinionsKilledTeamJungle:  number;
    neutralMinionsKilledEnemyJungle: number;
    totalTimeCrowdControlDealt:      number;
    champLevel:                      number;
    visionWardsBoughtInGame:         number;
    sightWardsBoughtInGame:          number;
    wardsPlaced:                     number;
    wardsKilled:                     number;
    firstBloodKill:                  boolean;
    firstBloodAssist:                boolean;
    firstTowerKill:                  boolean;
    firstTowerAssist:                boolean;
    firstInhibitorKill:              boolean;
    firstInhibitorAssist:            boolean;
    combatPlayerScore:               number;
    objectivePlayerScore:            number;
    totalPlayerScore:                number;
    totalScoreRank:                  number;
    playerScore0:                    number;
    playerScore1:                    number;
    playerScore2:                    number;
    playerScore3:                    number;
    playerScore4:                    number;
    playerScore5:                    number;
    playerScore6:                    number;
    playerScore7:                    number;
    playerScore8:                    number;
    playerScore9:                    number;
    perk0:                           number;
    perk0Var1:                       number;
    perk0Var2:                       number;
    perk0Var3:                       number;
    perk1:                           number;
    perk1Var1:                       number;
    perk1Var2:                       number;
    perk1Var3:                       number;
    perk2:                           number;
    perk2Var1:                       number;
    perk2Var2:                       number;
    perk2Var3:                       number;
    perk3:                           number;
    perk3Var1:                       number;
    perk3Var2:                       number;
    perk3Var3:                       number;
    perk4:                           number;
    perk4Var1:                       number;
    perk4Var2:                       number;
    perk4Var3:                       number;
    perk5:                           number;
    perk5Var1:                       number;
    perk5Var2:                       number;
    perk5Var3:                       number;
    perkPrimaryStyle:                number;
    perkSubStyle:                    number;
    statPerk0:                       number;
    statPerk1:                       number;
    statPerk2:                       number;
}

export interface Timeline {
    participantId:               number;
    creepsPerMinDeltas:          { [key: string]: number };
    xpPerMinDeltas:              { [key: string]: number };
    goldPerMinDeltas:            { [key: string]: number };
    csDiffPerMinDeltas:          { [key: string]: number } | null;
    xpDiffPerMinDeltas:          { [key: string]: number } | null;
    damageTakenPerMinDeltas:     { [key: string]: number };
    damageTakenDiffPerMinDeltas: { [key: string]: number } | null;
    role:                        Role;
    lane:                        Lane;
}

export enum Lane {
    Bottom = "BOTTOM",
    Jungle = "JUNGLE",
    Middle = "MIDDLE",
    Top = "TOP",
}

export enum Role {
    Duo = "DUO",
    DuoCarry = "DUO_CARRY",
    DuoSupport = "DUO_SUPPORT",
    None = "NONE",
    Solo = "SOLO",
}

export interface Team {
    teamId:               number;
    win:                  Win;
    firstBlood:           boolean;
    firstTower:           boolean;
    firstInhibitor:       boolean;
    firstBaron:           boolean;
    firstDragon:          boolean;
    firstRiftHerald:      boolean;
    towerKills:           number;
    inhibitorKills:       number;
    baronKills:           number;
    dragonKills:          number;
    vilemawKills:         number;
    riftHeraldKills:      number;
    dominionVictoryScore: number;
    bans:                 Ban[];
}

export interface Ban {
    championId: number;
    pickTurn:   number;
}

export enum Win {
    Fail = "Fail",
    Win = "Win",
}

export class SummonerStats {
    winRate:              number = 0;
    wins:                 number = 0;
    losses:               number = 0;
    games:                number = 0;
    kda:                  number = 0;
    kills:                number = 0;
    deaths:               number = 0;
    assists:              number = 0;
    maxKills:             number = 0;
    maxDeaths:            number = 0;
    maxAssists:           number = 0;
    averageKills:         number = 0;
    averageDeaths:        number = 0;
    averageAssists:       number = 0;
    uniqueChampions:      UniqueChampion[];
    jungleWinRate:        number = 0;
    jungleWins:           number = 0;
    jungleLosses:         number = 0;
    jungleGames:          number = 0;
    bottomCarryWinRate:   number = 0;
    bottomCarryWins:      number = 0;
    bottomCarryLosses:    number = 0;
    bottomCarryGames:     number = 0;
    bottomSupportWinRate: number = 0;
    bottomSupportWins:    number = 0;
    bottomSupportLosses:  number = 0;
    bottomSupportGames:   number = 0;
    midlaneCarryWinRate:  number = 0;
    midlaneCarryWins:     number = 0;
    midlaneCarryLosses:   number = 0;
    midlaneCarryGames:    number = 0;
    topCarryWinRate:      number = 0;
    topCarryWins:         number = 0;
    topCarryLosses:       number = 0;
    topCarryGames:        number = 0;
    premades:             Premade[];
}

export class Premade {
    accountId:    string = '';
    summonerName: string = '';
    wins:         number = 0;
    losses:       number = 0;
    games:        number = 0;
    winRate:      number = 0;
}

export class UniqueChampion {
    championId:     number = 0;
    kills:          number = 0;
    deaths:         number = 0;
    assists:        number = 0;
    kda:            number = 0;
    maxKills:       number = 0;
    maxDeaths:      number = 0;
    maxAssists:     number = 0;
    averageKills:   number = 0;
    averageDeaths:  number = 0;
    averageAssists: number = 0;
    wins:           number = 0;
    losses:         number = 0;
    games:          number = 0;
    winRate:        number = 0;
}