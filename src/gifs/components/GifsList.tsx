// import React from 'react'
import type { Gif } from "../interfaces/gif.interface";


interface Props {
    gifs: Gif[];
}

const GifsList = ( { gifs }: Props ) => {

    return (
        <div>
            <div className='gifs-container'>
                {
                    gifs.map( (gif) => (
                        <div key={ gif.id } className='gif-card'>
                            <img src={ gif.url } alt={ gif.title } />
                            <h3>{ gif.title }</h3>
                            <p>{ gif.width }x{ gif.height }(1.5mb)</p>
                        </div>
                    ) )
                } 
            </div>
        </div>
    )
}

export default GifsList
