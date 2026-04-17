/**
 * @callback ActivateCallback
 * @returns {void}
 */

class ViewElement{
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {ActivateCallback}
     */
    #activateCallback;

    /**
     * @param {string} id 
     */
    constructor(id){
        this.#id = id;
        this.#div = document.createElement("div");
        this.#activateCallback = null;
    }

    /**
     * @param {HTMLElement} parentElement 
     */
    appendTo(parentElement) {
        parentElement.appendChild(this.#div);
    }

    navigate(){
        if(this.#activateCallback){
            this.#activateCallback();
        }
    }

    get id(){
        return this.#id;
    }

    get div(){
        return this.#div;
    }

    /**
     * @param {ActivateCallback} value
     */
    set activateCallback(value){
        this.#activateCallback = value;
    }
}

export { ViewElement};