// import React from 'react'

import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void; 
}

const SearchBar = ( { placeholder = 'Buscar', onQuery }: Props ) => {

  const [query, setQuery] = useState('');

  useEffect( () => {
    // console.log('Hola desde el efecto.');
    // onQuery(query);
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 500);

    return () => {
      // console.log('funcion de limpieza');
      clearTimeout(timeoutId);
    }
  }, [query, onQuery] );

  const handleSearch = () => {
    onQuery(query);
    // setQuery('');
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if( event.key === 'Enter' ) { 
      handleSearch(); 
    }
  }

  return (
    <div>
        <div className='search-container'>
            <input 
              type="text" 
              placeholder={ placeholder }
              value={ query }
              onChange={ (event) => setQuery(event.target.value) }
              onKeyDown={ handleKeyDown } />
            <button onClick={ handleSearch }>Buscar</button>
        </div>      
    </div>
  )
}

export default SearchBar
