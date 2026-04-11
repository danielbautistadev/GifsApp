import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe('useCounter', () => {
    test('should initialize with default value of 10', () => {

        const { result } = renderHook( () => useCounter()); // renderHook es una función que nos permite renderizar un hook dentro de un componente de prueba, y nos devuelve un objeto con la propiedad result, que contiene el valor actual del hook.
        
        expect(result.current.counter).toBe(10); // result.current es el valor actual del hook, y counter es la propiedad que queremos verificar. toBe es un matcher de Jest que verifica que el valor sea exactamente igual a 10.

    });

    test('should initialize with value 20', () => {

        const initialValue = 20; // Definimos un valor inicial de 20 para el contador.

        const { result } = renderHook( () => useCounter(initialValue)); // Renderizamos el hook con el valor inicial de 20.

        expect(result.current.counter).toBe(initialValue); // Verificamos que el valor actual del contador sea igual al valor inicial que hemos definido.

    });

    test('should increment counter when handleAdd is called', () => {

        const { result } = renderHook( () => useCounter()); // Renderizamos el hook con el valor inicial por defecto (10).

        act( () => result.current.handleAdd() ); // Utilizamos la función act para simular una acción que modifica el estado del hook. En este caso, llamamos a la función handleAdd para incrementar el contador.

        expect(result.current.counter).toBe(11); // Verificamos que el valor actual del contador sea 11, lo que indica que se ha incrementado correctamente.

    });

    test('should decrement counter when handleSubtract is called', () => {

        const { result } = renderHook( () => useCounter());

        act( () => result.current.handleSubtract() );

        expect(result.current.counter).toBe(9);

    });

    test('should reset counter to initial value when handleReset is called', () => {

        const { result } = renderHook( () => useCounter()); //| Renderizamos el hook con el valor inicial por defecto (10).

        act( () => { result.current.handleAdd() }); // Incrementamos el contador para cambiar su valor.
        act( () => { result.current.handleAdd() });

        act( () => result.current.handleReset() ); // Llamamos a la función handleReset para restablecer el contador al valor inicial.

        expect(result.current.counter).toBe(10); // Verificamos que el valor actual del contador sea 10, lo que indica que se ha restablecido correctamente al valor inicial.

    });

})