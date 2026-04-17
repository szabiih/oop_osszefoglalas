import { ViewElement } from "./viewelement.js";
import { Color } from "./color.js";
import { Manager } from "./manager.js";

class Gomb extends ViewElement{
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @param {Manager} manager
     */
    constructor(manager){
        super("gomb");
        this.#manager = manager;

        const button = document.createElement("button");
        button.innerText = "Elem hozzaadasa";
        
        button.addEventListener("click", () => {
            this.#manager.addElement(new Color("okker"));
        });

        this.div.appendChild(button);
    }
}

export { Gomb};