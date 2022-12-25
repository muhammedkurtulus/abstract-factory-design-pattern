import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  BasketballTeam,
  FootballTeam,
  NBA,
  LaLiga,
} from "../abstractions/abstract";

export default function Home() {
  const nba = new NBA();
  const laliga = new LaLiga();

  const chicagobulls = new BasketballTeam(
    "Chicago Bulls",
    "Red, Black and White"
  );
  const lakers = new BasketballTeam(
    "Los Angeles Lakers",
    "Purple, Gold, Black and White"
  );

  const realmadrid = new FootballTeam("Real Madrid", "Yellow, Blue and Red");

  nba.CreateTeam(chicagobulls, lakers);
  laliga.CreateTeam(realmadrid);

  chicagobulls.CreatePlayer({ playerName: "Patrick", age: 21 });
  realmadrid.CreatePlayer({ playerName: "Karim", surname: "Benzema", age: 35 });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <b>Team Name : |Team Colors | Team Player Count | Enum Team Type |</b>
        <br />
        {chicagobulls.name} : | {lakers.getTeamColor()} |{" "}
         {lakers.getPlayerCount()} | {lakers.getTeamType()} |
        <br />
        {realmadrid.name} : |{realmadrid.getTeamColor()} |{" "}
         {realmadrid.getPlayerCount()} | {realmadrid.getTeamType()} |
      </main>
    </>
  );
}
