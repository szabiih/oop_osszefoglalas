import { Manager } from "./manager.js";

class ViewElement {
    /**
    * @type {HTMLDivElement}
    */
    #div;

    /**
    * @type {Manager}
    */
    #manager;

    /**
    * @param {Manager} manager
    */
    constructor(manager) {
        this.#manager = manager;
        this.#div = document.createElement("div");
    }

    /**
    * @param {HTMLElement} parentElement
    * @returns {void}
    */
    appendTo(parentElement) {
        parentElement.appendChild(this.#div);
    }

    /**
    * @returns {Manager}
    */
    getManager() {
        return this.#manager;
    }

    /**
    * @returns {HTMLDivElement}
    */
    getDiv() {
        return this.#div;
    }
}

export {ViewElement}