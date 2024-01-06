import { getBackground, getColor } from "../../helpers/helper";
import Typewriter from 'typewriter-effect';
import './styles/Main.css'
import { useNavigate, useParams } from "react-router-dom";
import PDFGeneratorButton from "./PDFGeneratorButton";


const Main = ({ pokemon }) => {

  const { id } = useParams();
  const navigate = useNavigate();

   const handleBack = () => {
    window.scrollTo(0,0);
    navigate('/pokedex');
   }

    const getImage = () => {
        if (pokemon?.[0].sprites?.other.dream_world.front_default) {
            return pokemon?.[0].sprites?.other.dream_world.front_default
        } else {
            return pokemon?.[0].sprites?.other.home.front_default
        }
    }

  return (

    

    <main style={{ backgroundColor: getBackground(0, pokemon[0])}} className="poke-info__container">
      <PDFGeneratorButton id={id} pokemon={pokemon?.[0].name}/>
      <div className="poke-info__img">
        <i onClick={handleBack} className='back bx bx-chevrons-left bx-flip-vertical'></i>
        <h1 style={{ color: getColor(0, pokemon[0]) }} className="poke-info__name"> 
          <Typewriter
                                options={{
                                    strings: [  `${pokemon?.[0].name}`, 
                                                ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
        </h1>
        <div className="poke-info__height">
          <img className='avatar' src={getImage()} alt="" />
          <p style={{ color: getColor(0, pokemon[0]) }} className="poke-info__desc"> Height:</p>                      
          <p style={{ color: getColor(0, pokemon[0]) }} className="poke-info__info"> {pokemon?.[0].height} "</p>                      
          <p style={{ color: getColor(0, pokemon[0]) }} className="poke-info__desc"> Weight: </p>                      
          <p style={{ color: getColor(0, pokemon[0]) }} className="poke-info__info"> {pokemon?.[0].weight} pounds </p>                      
        </div>
        <img className="poke-info__pic" src={pokemon?.[0].sprites.other["official-artwork"].front_default} alt=""></img>
        <div className="cajas">
          <div className="type__container">
            <p className="type__legend"> Type </p>
            <div className="type__container-inside">
            {
            pokemon?.[0].types.map((infoType, index) => (
              <div key={infoType.type.name} style={{ backgroundColor: getBackground(index, pokemon[0]) }} className="type__box">
                <p  style={{ color: getColor(index, pokemon[0]) }} className="type__name">{infoType.type.name.toUpperCase()}</p>
              </div>
              ))
            }
            </div>
          </div>
          <div className="type__container two">
            <p className="type__legend"> Habilities </p>
            <div className="type__container-inside">
            {
            pokemon?.[0].abilities?.map((infoType) => (
              <div  className="type__box">
                <p key={infoType.ability.name} className="type__name">{infoType.ability.name.toUpperCase()}</p>
              </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
      </main> 
          
  )
}

export default Main
