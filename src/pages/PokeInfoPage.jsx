import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Main from "../components/PokedexInfoPage/Main";
import StatsSection from "../components/PokedexInfoPage/StatsSection";
import MovementsSection from "../components/PokedexInfoPage/MovementsSection";
import Loading from "../components/Loading";

const PokeInfoPage = () => {

  const { id } = useParams();

  const url = `/pokemons/search/${id}`
  const [ pokemon, getPokemon, , , isLoading ] = useFetch(url);
  
  
  useEffect( () => {
    getPokemon()
  },[])

  return (
    <>
    {
      isLoading
      ? <Loading />
      : <section className="pokeinfo">
      
      <Main 
        pokemon={pokemon}
      />

      <StatsSection 
        pokemon={pokemon}
      />

      <MovementsSection 
        pokemon={pokemon}
      />

      </section>
    }
    </>
  )
}

export default PokeInfoPage
