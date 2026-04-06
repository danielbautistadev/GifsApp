import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import GifsApp from './GifsApp'

describe('GifsApp', () => {

    test('should render component properly', () => {

        // Tomar una captura de pantalla del componente GifsApp
        const { container } = render(<GifsApp />)

        // Verificar que el componente se renderiza correctamente
        expect(container).toMatchSnapshot();

    });

});

