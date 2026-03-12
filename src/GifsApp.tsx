import GifsList from './gifs/components/GifsList'
import PreviousSearches from './gifs/components/PreviousSearches'
import useGifs from './gifs/hooks/useGifs'
// import { mockGifs } from './mock-data/gifs-mock'
import CustomHeader from './shared/components/customHeader'
import SearchBar from './shared/components/SearchBar'

// const previousTerms: string[] = ['Gokú','Vegetta','Milk','Búlma','Krillín','Número 18','Cell','Gohan'];

const GifsApp = () => {

  const { previousTerms, gifs, handleSearch, handleTermClicked } = useGifs();  

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
