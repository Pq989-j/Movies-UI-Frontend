import {render, screen, fileEvent, fireEvent} from "@testing-library/react"
import Contador from "./Contador"
import { expect, it  } from "vitest"

it("Empieza en 0 y sube al pulsar sumar", () => {
    render(<Contador />)
    expect(screen.getByText("Cuenta: 0")).
    toBeInTheDocument();
    fireEvent.click(screen.getByText("Sumar"))
    expect(screen.getByText("Cuenta: 1")).
    toBeInTheDocument()

})