class ParentViewElementClass{
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
        this.#id = id;
        this.#div = document.createElement("div");
        this.#div.classList.add('card');

        const head = document.createElement('div');

        head.classList.add('head');
        head.innerText = "id:" + id;
        this.#div.appendChild(head);
    }

    //                                                      Függvények
    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent) {
        parent.appendChild(this.#div);
    }

    //                                                  Getter / Setter fg.
    /**
     * 
     * @returns {HTMLDivElement}
     */
    get div() {
        return this.#div;
    }
}

export {ParentViewElementClass}