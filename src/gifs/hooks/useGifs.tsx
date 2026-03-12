// Este es mi archivo de useGifs
import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = async (term: string) => {
        // console.log({term});
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
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


    return {

        previousTerms,
        gifs,
        handleTermClicked,
        handleSearch

    }
}

export default useGifs
