import styles from "../styles/Home.module.css";
import { LaLigaFactory, FootballWorld } from "../utils/abstract-factory";

const abstract = () => {
  const spain = new LaLigaFactory();
  const getLeague = new FootballWorld();
  const team = getLeague.Team(spain);
  const player = getLeague.Player(spain);

  const color = team.GetTeamColor();
  const topScorer = player.GetTopScorer();

  console.log(color);
  console.log(topScorer);

  return (
    <main className={styles.main}>
      2021-2022 Season
      <br />
      Top Scorer Player: {topScorer}
      <br />
      Champion Team Colors: {color}
    </main>
  );
};

export default abstract;
