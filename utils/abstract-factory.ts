export interface IPlayer {
  GetTopScorer(): string;
}

export interface ITeam {
  GetTeamColor(): string;
}

export interface IFootballFactory {
  CreateTeam(): ITeam;
  CreatePlayer(): IPlayer;
}

export class BundesLigaFactory implements IFootballFactory {
  public CreateTeam(): ITeam {
    return new BayernMunchen();
  }

  public CreatePlayer(): IPlayer {
    return new BundesligaPlayer();
  }
}

export class LaLigaFactory implements IFootballFactory {
  public CreateTeam(): ITeam {
    return new RealMadrid();
  }

  public CreatePlayer(): IPlayer {
    return new LaLigaPlayer();
  }
}

export class SerieAFactory implements IFootballFactory {
  public CreateTeam(): ITeam {
    return new Milan();
  }

  public CreatePlayer(): IPlayer {
    return new SerieAPlayer();
  }
}

export class BayernMunchen implements ITeam {
  public GetTeamColor(): string {
    return "Bundesliga-Bayern Munchen: Red and White";
  }
}

export class Milan implements ITeam {
  public GetTeamColor(): string {
    return "SerieA-Milan: Black and Red";
  }
}

export class RealMadrid implements ITeam {
  public GetTeamColor(): string {
    return "LaLiga-Real Madrid: Blue and White";
  }
}

export class BundesligaPlayer implements IPlayer {
  public GetTopScorer(): string {
    return "Robert Lewandowski";
  }
}

export class LaLigaPlayer implements IPlayer {
  public GetTopScorer(): string {
    return "Karim Benzema";
  }
}

export class SerieAPlayer implements IPlayer {
  public GetTopScorer(): string {
    return "Ciro Immobile";
  }
}

export class FootballWorld {
  public Team(factory: IFootballFactory) {
    return factory.CreateTeam();
  }
  public Player(factory: IFootballFactory) {
    return factory.CreatePlayer();
  }
}
