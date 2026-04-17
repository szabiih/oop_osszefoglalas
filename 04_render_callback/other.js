import { ViewElement } from "./viewelement.js";
import { Manager } from "./manager.js";

class TableElement extends ViewElement {
    /**
    * @param {Manager} manager
    */
    constructor(manager) {
        super(manager);
    }

    /**
    * @param {Color[]} colorList
    * @returns {void}
    */
    render(colorList) {
    const div = this.getDiv();
    div.innerHTML = "";

    colorList.forEach(color => {
        const p = document.createElement("p");
        p.textContent = color.getSzin();
        div.appendChild(p);
    });
    }
}

class ButtonElement extends ViewElement {
    /**
     * @type {HTMLButtonElement}
     */
    #button;

    /**
    * @param {Manager} manager
    */
    constructor(manager) {
        super(manager);

    this.#button = document.createElement("button");
    this.#button.textContent = "Összes szín";

    this.getDiv().appendChild(this.#button);

    this.#button.addEventListener("click", () => {
        const list = this.getManager().getAllElement();
        this.getManager().render(list);
    });
    }
}

class EmptyButtonElement extends ViewElement {
    /**
     * @type {HTMLButtonElement}
     */
    #button;

    /**
    * @param {Manager} manager
    */
    constructor(manager) {
        super(manager);

        this.#button = document.createElement("button");
        this.#button.textContent = "Üres lista";

        this.getDiv().appendChild(this.#button);

        this.#button.addEventListener("click", () => {
            const list = this.getManager().getEmptyList();
            this.getManager().render(list);
        });
    }
}

export {TableElement, ButtonElement, EmptyButtonElement}