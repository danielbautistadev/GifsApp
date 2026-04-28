import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import MyCounterApp from "./MyCounterApp";

describe('MyCounterApp', () => {

    test('should render the component correctly', () => {

        render(<MyCounterApp />);
        
        // screen.debug();

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain('Counter: 8');
        expect( screen.getByRole('button', { name: '+1' }) ).toBeDefined();
        expect( screen.getByRole('button', { name: '-1' }) ).toBeDefined();
        expect( screen.getByRole('button', { name: 'Reset' }) ).toBeDefined();
        
    });

    test('should increment the counter when +1 button is clicked', () => {

        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click( button );

        expect( labelH1.innerHTML ).toContain('Counter: 9');

    });

    test('should decrement the counter when -1 button is clicked', () => {

        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '-1' });

        fireEvent.click( button );

        expect( labelH1.innerHTML ).toContain('Counter: 7');

    });

    test('should reset the counter when Reset button is clicked', () => {

        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: 'Reset' });

        fireEvent.click( button );

        expect( labelH1.innerHTML ).toContain('Counter: 8');

    });

});