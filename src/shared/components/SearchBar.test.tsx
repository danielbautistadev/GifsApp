import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SearchBar from "./SearchBar";

describe('SearchBar', () => {

    test('should render searchbar correctly', () => {

        const { container } = render( <SearchBar onQuery={ () => {} } /> );

        expect( container ).toMatchSnapshot();
        // OPCIONAL: Verificar que el input y el botón estén presentes
        expect( screen.getByRole('textbox') ).toBeDefined();
        expect( screen.getByRole('button') ).toBeDefined();

    });

    test('should call onQuery with the correct value after 700ms', async () => {

        const onQueryMock = vi.fn();
        render( <SearchBar onQuery={ onQueryMock } /> );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { value: 'test' } } );

        // await new Promise( resolve => setTimeout(resolve, 701) ); // Esperamos un poco más de 701ms para asegurarnos de que se haya llamado a onQuery

        await waitFor( () => {
            expect( onQueryMock ).toHaveBeenCalled();
            expect( onQueryMock ).toHaveBeenCalledWith('test');
            
        });

        // screen.debug();

        // expect( onQueryMock ).toHaveBeenCalled();
        // expect( onQueryMock ).toHaveBeenCalledWith('test');
        

    });

    test('should call only once with the last value (debounce)', async () => {

        const onQueryMock = vi.fn();
        render( <SearchBar onQuery={ onQueryMock } /> );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { value: 't' } } );
        fireEvent.change( input, { target: { value: 'te' } } );
        fireEvent.change( input, { target: { value: 'tes' } } );
        fireEvent.change( input, { target: { value: 'test' } } );

        await waitFor( () => {
            expect( onQueryMock ).toHaveBeenCalledTimes(1);
            expect( onQueryMock ).toHaveBeenCalledWith('test');
            
        });

    });

    test('should cal onQuery when button clicked with the input value', () => {

        const onQueryMock = vi.fn();
        render( <SearchBar onQuery={ onQueryMock } /> );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { value: 'test' } } );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( onQueryMock ).toHaveBeenCalledTimes(1);
        expect( onQueryMock ).toHaveBeenCalledWith('test');

    });

    test('should the input has the correct placeholder value', () => {

        const placeholder = 'Buscar gif';

        render( <SearchBar onQuery={ () => {} } placeholder={placeholder} /> );

        // screen.debug();

        expect( screen.getByPlaceholderText(placeholder) ).toBeDefined();
        

    });

});