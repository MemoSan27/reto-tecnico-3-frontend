import PokeCard from "../components/PokedexPage/PokeCard"
import './styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination"
import Error from "../components/Error"
import Loading from "../components/Loading"
import { usePokePage } from "../hooks/usePokePage"

const PokedexPage = () => {
  const { 
      handleChange,
      trainerName,
      offsetRef,
      param,
      limitRef,
      param2,
      queryParams,
      quantyPages,
      page,
      pokemons,
      perPages,
      selectElement,
      isLoading,
      setPage
     } = usePokePage();
  
 
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