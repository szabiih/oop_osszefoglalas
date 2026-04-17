import { Color } from "./color.js";
import { RenderCallback } from "./rendercallback.js";

class Manager {
    /**
     * @type {Color[]}
     */
    #list;

    /**
     * @type {RenderCallback | null}
     */
    #renderCallback;

    /**
    * @param {Color[]} data
    */
    constructor(data) {
        this.#list = data;
        this.#renderCallback = null;
    }

    /**
    * @param {RenderCallback} callback
    * @returns {void}
    */
    setRenderCallback(callback) {
        this.#renderCallback = callback;
    }

    /**
    * @returns {Color[]}
    */
    getAllElement() {
        return this.#list;
    }

    /**
    * @returns {Color[]}
    */
    getEmptyList() {
        return [];
    }

    /**
    * @param {Color[]} list
    * @returns {void}
    */
    render(list) {
        if (this.#renderCallback) {
            this.#renderCallback.render(list);
        }
    }
}

export {Manager}