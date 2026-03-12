// porque en este componente tengo el siguiente error: installHook.js:1 Each child in a list should have a unique "key" prop.

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
                    <li key={ term } id={ term } onClick={ () => onLabelClicked(term) }>{ term }</li>
                  ) )
                }
            </ul>
        </div>
    </div>
  )
}

export default PreviousSearches
