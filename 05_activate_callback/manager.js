/**
 * @callback RenderCallback
 * @param {Color[]} colorList
 * @returns {void}
 */

import {Color} from './color.js';

class Manager {
    /**
     * @type {Color[]}
     */
    #list;

    /**
     * @type {RenderCallback}
     */
    #renderCallback;

    /**
     * @param {Color[]} data 
     */
    constructor(data) {
        this.#list = data;
    }

    /**
     * @param {RenderCallback} value
     */
    set renderCallback(value) {
        this.#renderCallback = value;
    }

    getAllElement() {
        if (this.#renderCallback) {
            this.#renderCallback(this.#list);
        }
    }

    /**
     * @param {Color} elem 
     */
    addElement(elem) {
        this.#list.push(elem);
        if (this.#renderCallback) {
            this.#renderCallback(this.#list);
        }
    }
}

export {Manager};