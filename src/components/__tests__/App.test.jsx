import App from "../../App.jsx";
import {render, screen, fireEvent} from "@testing-library/react";
import {describe, test, expect, beforeEach} from "vitest";
import {Modal} from "../Modal";
//function , description ,  logic to run
describe('App component ', ()=>{
    beforeEach(()=>{
        render(
            <App>
                <button>Mostrar EPG</button>
                <Modal></Modal>
            </App>
        );
    });

    test("Mostrar boton EPG en APP component", ()=>{
        expect(screen.getByText('Mostrar EPG')).toBeDefined()
    })
    test("Mostrar modal onclick en APP component", ()=>{
        const button = screen.getByText('Mostrar EPG');
        fireEvent.click(button);
        expect(screen.queryByRole(/modal/i)).toBeNull();
    });

});