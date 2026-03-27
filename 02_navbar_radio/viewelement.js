class ViewElement{
    //                                                      Privát mezők
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLDivElement}
     */
    #div;

    //                                                      Konstruktor
    /**
     * 
     * @param {string} id 
     */
    constructor(id){

    }

    //                                                      Függvények
    /**
     * 
     * @param {HTMLDivElement} parent 
     */
    appendTo(parent){

    }

    /**
     * 
     * @param {string} id 
     */
    activate(id){

    }

    //                                                  Getter / Setter fg.
    /**
     * @returns {string}
     */
    get id(){
        return this.#id;
    }

    /**
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div;
    }
}

export {ViewElement}