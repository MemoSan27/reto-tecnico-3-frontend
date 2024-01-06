import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

export const usePokeInfoPage = () => {
    const { id } = useParams();
    const url = `/pokemons/search/${id}`
    const [ pokemon, getPokemon, , , isLoading ] = useFetch(url);
    
    useEffect( () => {
      getPokemon()
    },[])   

    return {
        pokemon, 
        isLoading
  }
}
