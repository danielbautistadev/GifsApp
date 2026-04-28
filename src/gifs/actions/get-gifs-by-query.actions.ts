import { giphyApi } from '../api/giphy.api';

import type { GiphyResponse } from '../interfaces/giphy.Response';
import type { Gif } from '../interfaces/gif.interface';


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    if ( query.length === 0 ) return [];

    try {

        const response = await giphyApi<GiphyResponse>('/search', {
            params: {
                q: query,
                limit: 25,
            }
        })

        // console.log(response);
        // console.log(response.data);
        // fetch(`https://api.giphy.com/v1/gifs/search?api_key=YBwlDveBz7AZKOu1dT4zaFdebEwVJVWt&q=${query}&limit=25&lang=en`);

        return response.data.data.map( (gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.height)
        }) );

    } catch (error) {

        console.error(error);
        return [];

    }

    

};