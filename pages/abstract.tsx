import {LaLigaFactory} from '../utils/abstract-factory'

const abstract=() => {

    const spain = new LaLigaFactory();
    const team = spain.CreateTeam();
    const color = team.GetTeamColor()
    console.log(color); 

    return(
            <div>{color}</div>
    )
}

export default abstract;