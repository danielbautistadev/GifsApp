// import React from 'react'
import { useState } from 'react'
import GifsList from './gifs/components/GifsList'
import PreviousSearches from './gifs/components/PreviousSearches'
// import { mockGifs } from './mock-data/gifs-mock'
import CustomHeader from './shared/components/customHeader'
import SearchBar from './shared/components/SearchBar'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions'
import type { Gif } from './gifs/interfaces/gif.interface'

// const previousTerms: string[] = ['Gokú','Vegetta','Milk','Búlma','Krillín','Número 18','Cell','Gohan'];

const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({term});
  }

  const handleSearch = async (query: string) => {
    // console.log({query});
    // TAREA: 
    // 1. Validar que el query no esté vacío
    // 2. Convertir el query a minúsculas y eliminar espacios en blanco
    // 3. Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    // 4. Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
    const trimmed = query.trim();

    if( !trimmed ) return;

    const newTerm = trimmed.toLowerCase();

    setPreviousTerms((prev) => {
      if (prev.includes(newTerm)) return prev;
      const updateTerm = [newTerm, ...prev];
      return updateTerm.slice(0, 8);
    });

    /**
     * POSIBLE SOLUCION A LA TAREA
     * query = query.trim().toLowerCase();
     * if( query.lenght === 0 ) return;
     * if( previousTerms.includes(query) ) return;
     * const currentTerms = previousTerms.slice(0,8);
     * currentTerms.unshift(query);
     * setPreviousTerms( currentTerms );
     * AQUI HAY UNA FORMA MÀS CORTA:
     * setPreviousTerms( [query, ...previousTerms].slice(0,8) );
     * 
     */
    
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);    



  }

  return (
    <>
        {/* Header */}
        {/* CustomHeader */}
        <CustomHeader title='Gifs' desc='Descubre y comparte el Gif perfecto.' />

        {/* Search */}
        {/* SearchBar Component */}
        <SearchBar placeholder='Buscar tu gif preferido' onQuery={(query) => handleSearch(query)} />

        {/* Busquedas previas */}
        {/* PreviousSearches Component */}
        <PreviousSearches searches={previousTerms} onLabelClicked={ handleTermClicked } />
        {/* <PreviousSearches searches={previousTerms} onLabelClicked={ (term) => handleTermClicked(term) } /> */}

        {/* Gifs */}
        {/* GifsList Component: Props => gifs: Gif[] */}
        <GifsList gifs={ gifs }/>

    </>
  )
}

export default GifsApp
