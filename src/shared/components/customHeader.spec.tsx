import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CustomHeader from "./customHeader";

describe("CustomHeader", () => {
    const title = 'Gifs';

    test("should render the title correctly", () => {

        render(<CustomHeader title={ title } />)

        // screen.debug()

        expect(screen.getByText(title)).toBeDefined()

    });

    test("should render the description when provided", () => {

        const desc = 'Descubre gifs animados'

        render(<CustomHeader title={ title } desc={ desc } />)

        // screen.debug()

        expect(screen.getByText(desc)).toBeDefined()
        expect(screen.getByRole('paragraph')).toBeDefined() // opcional
        expect(screen.getByRole('paragraph').innerHTML).toBe(desc) // opcional

    });

    test("should not render the description when not provided", () => {

        const { container } = render(<CustomHeader title={ title } />)

        const divElement = container.querySelector('.content-center')

        const h1 = divElement?.querySelector('h1')
        expect(h1?.innerHTML).toBe(title)

        const p = divElement?.querySelector('p')
        expect(p).toBeNull()

    });

});