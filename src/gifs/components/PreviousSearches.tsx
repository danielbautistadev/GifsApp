// import React from 'react'

import type { FC } from "react";

interface Props {
  searches: string[];

  onLabelClicked: (term: string) => void;
}

const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <div>
        <div className='previous-searches'>
            <h2>Búsquedas previas</h2>
            <ul className='previous-searches-list'>
                {
                  searches.map( (term) => (
                    // <li id={ term } onClick={ (onClick) => console.log(onClick) }>{ term }</li>
                    <li id={ term } onClick={ () => onLabelClicked(term) }>{ term }</li>
                  ) )
                }
            </ul>
        </div>
    </div>
  )
}

export default PreviousSearches
