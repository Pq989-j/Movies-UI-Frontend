import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, expect, vi, it, afterEach  } from "vitest"

import ListaNotas from "./ListarNotas";

beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn())
})

afterEach(() => {
    vi.unstubAllGlobals()
})

it("pinta las notas que devuelve la API", async ()=> {
    fetch.mockResolvedValue({
        ok: true,
        json: async () => [
            {_id: "1", titulo: "Comprar pan"},
            {_id: "2", titulo: "Estudiar React"},
        ]
    })

    render(<ListaNotas />)

    expect(screen.getByText("Cargando notas…")).toBeInTheDocument()

    expect(await screen.findByText("Comprar pan")).toBeInTheDocument 
    expect(await screen.findByText("Estudiar React")).toBeInTheDocument
})

it("Muestra un mensaje si la API falla", async() => {
    fetch.mockResolvedValue({
        ok: false,
        status: 500
    })
    render(<ListaNotas />)
    expect(await screen.findByText(/error/i)).toBeInTheDocument()
})