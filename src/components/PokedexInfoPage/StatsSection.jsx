import { getBackground, getColor } from "../../helpers/helper";
import Typewriter from 'typewriter-effect';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './styles/StatSection.css'


const StatsSection = ({ pokemon }) => {
  return (
    <article style={{ backgroundColor: getBackground(0, pokemon[0])}} className="poke-info__container">
        <div className="poke-info__img">
          <h1 style={{ color: getColor(0, pokemon[0]) }} className="poke-info__name"> 
            <Typewriter
                                  options={{
                                      strings: [  `stats`, 
                                                  ],
                                      autoStart: true,
                                      loop: true,
                                  }}
                              />
          </h1>
        </div>
        <div className="graphics">
          <div className="progress">
            <h2 className="progress__name" style={{ color: getColor(0, pokemon[0])}}> { pokemon?.[0].stats?.[0].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff',
                textColor: getColor(0, pokemon[0])
              })} 
              value={((pokemon?.[0].stats?.[0].base_stat)/150) * 100}
              text={`${pokemon?.[0].stats?.[0].base_stat} / 150`}
              
            />
          </div>

          <div className="progress">
            <h2 className="progress__name" style={{ color: getColor(0, pokemon[0])}}> { pokemon?.[0].stats?.[1].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff',
                textColor: getColor(0, pokemon[0])
              })} 
              value={((pokemon?.[0].stats?.[1].base_stat)/150) * 100}
              text={`${pokemon?.[0].stats?.[1].base_stat} / 150`}
            />
          </div>
                    
          <div className="progress">
            <h2 className="progress__name" style={{ color: getColor(0, pokemon[0])}}> { pokemon?.[0].stats?.[4].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff',
                textColor: getColor(0, pokemon[0])
              })} 
              value={((pokemon?.[0].stats?.[4].base_stat)/200) * 100}
              text={`${pokemon?.[0].stats?.[4].base_stat} / 200`}
            />
          </div>

          <div className="progress">
            <h2 className="progress__name" style={{ color: getColor(0, pokemon[0])}}> { pokemon?.[0].stats?.[5].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff',
                textColor: getColor(0, pokemon[0])
              })} 
              value={((pokemon?.[0].stats?.[5].base_stat)/150) * 100}
              text={`${pokemon?.[0].stats?.[5].base_stat} / 150`}
            />
          </div>
        </div>
      </article>
  )
}

export default StatsSection
