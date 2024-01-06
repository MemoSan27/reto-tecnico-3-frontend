import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination"
import Error from "../components/Error"
import Loading from "../components/Loading"
import { useNavigate } from "react-router-dom"

const PokedexPage = () => {

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

  const offsetRef = useRef();
  const limitRef = useRef();
  
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
  
  const inputSearch = useRef()

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

   const selectElement = useRef();

   const handleChange = () => {
    setPage(1);
    setSelectValue2(selectElement.current.value)
}
 
  return (
  <main>
        <section className="pokepage__container">
          <div className="pokepager__ppcontainer">
          <p className="pokepage__perpage"> Pokemons per page?</p>
          <select ref={selectElement} className="pokepage__ppselect" onChange={handleChange}>
            <option value={12}>Auto</option>
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
            <option value={32}>32</option>
          </select>
          </div>
          <p className="pokepage__welcome">Welcome <span className="pokepage__trainer">"{ trainerName }"</span>, here select your favorite pokemon, let's go!</p>
          <div className="form__offset">
            <h2 className="offset__label"> Offset:</h2>
            <input ref={offsetRef} className="offset__input" type="number" value={param} onChange={() => setParam(offsetRef.current.value)} />
            <h2 className="limit__label"> Limit:</h2>
            <input ref={limitRef} className="limit__input" type="number" value={param2} onChange={() => setParam2(limitRef.current.value)} /> <br/>
            <button className="offset__btn" onClick={queryParams}> Submit </button>
          </div>
        </section>

        
          {
            isLoading
            ? <Loading />
            : <>
            <section>
            {pokemons?.[0] 
            ? <Pagination quantyPages={quantyPages} page={page} setPage={setPage}/> 
            : <Error> No pokemons found!! </Error> 
            }
            </section>
    
            <article className="pokemons__container">
              {
                pokemons?.map(poke =>(
                  <PokeCard
                  key={poke.url}
                  url={poke.url}
                  />
                )).slice((page - 1)* perPages, (page - 1)* perPages + perPages)
              }
            </article>
    
            <section>
              {pokemons?.[0] && <Pagination quantyPages={quantyPages} page={page} setPage={setPage}/>}
            </section>
            </>
          }
  </main>
  
  )
}

export default PokedexPage