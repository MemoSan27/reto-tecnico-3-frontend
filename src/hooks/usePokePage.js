import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


export const usePokePage = (selectElement = useRef(), offsetRef = useRef(), limitRef = useRef(), inputSearch = useRef()) => {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
  const [selectValue2, setSelectValue2] = useState(12)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(false);
  const [param, setParam] = useState(1);
  const [param2, setParam2] = useState(1);
  const [bandera, setBandera] = useState(false);

  const navigate = useNavigate();
 
  const trainerName = useSelector(store => store.trainerName)

  const url = !limit ? '/pokemons' : `/pokemons/paginated?offset=${param}&limit=${param2}`;
  const [ pokemons, getPokemons, getByTypePokemon, filtered, isLoading ] = useFetch(url)
  
  
  const queryParams = () => {
    if((param || param2) < 1 ) return;
    setLimit(true);
    setBandera(!bandera);
    navigate(`?offset=${param}&limit=${param2}`)
  }
  
  useEffect(() => {
    if(inputValue === '' && selectValue === 'allPokemons'){
    getPokemons()
    setPage(1);  
    }else if(inputValue !== '' && selectValue === 'allPokemons'){
      filtered(inputValue)
      setPage(1);
    }else{
      setInputValue('');
      getByTypePokemon(selectValue);
      setPage(1);
    }
}, [inputValue, selectValue, limit, bandera])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSelectValue('allPokemons');
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    setPage(1);
    inputSearch.current.value = ''
  }
 //===== estados y variables de paginación=====
   const perPages = Number(selectValue2);
   const quantyPages = Math.ceil(pokemons?.length / perPages);

   const handleChange = () => {
    setPage(1);
    setSelectValue2(selectElement.current.value)
  }
   
    return {
      handleChange,
      trainerName,
      offsetRef,
      param,
      offsetRef,
      limitRef,
      param2,
      limitRef,
      queryParams,
      quantyPages,
      page,
      setPage,
      pokemons,
      perPages,
      setPage,
      selectElement,
      isLoading,
      setParam,
      setParam2
  }
}
