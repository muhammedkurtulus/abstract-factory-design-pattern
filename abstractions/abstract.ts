interface IPlayer {
  playerName: string;
  age: number;
  surname?: string;
}

interface ITeam {
  getPlayerCount(): number;
  getTeamType(): TeamType;
  CreatePlayer(player: IPlayer): void;
}

interface ILeagueFactory {
  //onetomany
  CreateTeam(...teams: ITeam[]): void;
}

enum TeamType {
  football,
  basketball,
}

export abstract class Team implements ITeam {
  private _name: string;
  get name() {
    return this._name;
  }
  private _color: string;
  get color() {
    return this._color;
  }

  private type: TeamType;
  private players = Array.of<IPlayer>();
  constructor(type: TeamType, name: string, color: string) {
    this.type = type;
    this._name = name;
    this._color = color;
  }
  CreatePlayer(player: IPlayer): void {
    this.players.push(player);
  }
  getTeamType(): TeamType {
    return this.type;
  }
  abstract getPlayerCount(): number;

  abstract getTeamColor(): string;
}

export class BasketballTeam extends Team {
  constructor(name: string, teamColor: string) {
    super(TeamType.basketball, name, teamColor);
  }

  getTeamColor(): string {
    return this.color;
  }

  getPlayerCount(): number {
    return 5;
  }
}

export class FootballTeam extends Team {
  constructor(name: string, color: string) {
    super(TeamType.football, name, color);
  }

  getPlayerCount(): number {
    return 11;
  }

  getTeamColor(): string {
    return this.color;
  }
}

export class NBA implements ILeagueFactory {
  private teams = Array.of<ITeam>();

  CreateTeam(...teams: ITeam[]): void {
    this.teams.concat(teams);
  }
}

export class LaLiga implements ILeagueFactory {
  private teams = Array.of<ITeam>();

  CreateTeam(...teams: ITeam[]): void {
    this.teams.concat(teams);
  }
}
