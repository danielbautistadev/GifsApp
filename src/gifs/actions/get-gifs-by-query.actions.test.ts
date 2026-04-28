import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.actions";

import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from './../../../test/mocks/giphy.response.data';

describe('Giphy API', () => {

    // Es conveniente colocar el mock fuera del test, para que no se vuelva a crear cada vez que se ejecute el test, sino que se cree una sola vez para todos los tests. Además, si se coloca dentro del test, el mock solo estará disponible para ese test, y no para los demás tests.
    let axiosMock = new AxiosMockAdapter( giphyApi );

    beforeEach( () => {
        // axiosMock.reset();
        axiosMock = new AxiosMockAdapter( giphyApi );
    })

    // test('should return a list of gifs based on a query', async () => {

    //     const gifs  = await getGifsByQuery('gokú');
    //     console.log(gifs);
    //     const [ gifs1 ] = gifs;
    //     console.log(gifs1);

    //     expect(gifs.length).toBe(25);

    //     expect(gifs1).toStrictEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number)
    //     });

    // });

    test('should return a list of gifs based on a query (mocked)', async () => {

        axiosMock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('gokú');

        expect(gifs.length).toBe(25);

        gifs.forEach( (gif) => {
            expect( typeof gif.id ).toBe('string');
            expect( typeof gif.title ).toBe('string');
            expect( typeof gif.url ).toBe('string');
            expect( typeof gif.width ).toBe('number');
            expect( typeof gif.height ).toBe('number');
        });

    });

    test('should return an empty list of gifs if query is empty', async () => {

        // axiosMock.onGet('/search').reply(200, { data: [] });
        axiosMock.restore(); // Restauramos el mock para que no afecte a este test, ya que en este test no queremos mockear la respuesta de la API, sino que queremos que se ejecute la función real, y como la función real hace una petición a la API, si el mock sigue activo, entonces la petición a la API se va a mockear y no se va a ejecutar la función real, sino que se va a ejecutar el mock, y como el mock no tiene una respuesta definida para este caso, entonces va a devolver una respuesta vacía, lo cual no es lo que queremos en este test.

        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);

    });

    test('should handle error when tha API returns an error', async () => {

        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation( () => {
                // No hacemos nada, solo queremos espiar el método console.error para verificar que se haya llamado correctamente, y para evitar que se muestre el error en la consola durante la ejecución del test.
            } );

        axiosMock.onGet('/search').reply(400, { data: { message: 'Bad Request' }, });

        const gifs = await getGifsByQuery('goku');

        // console.log('Hola mundo');
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith( expect.anything() );

    });

});