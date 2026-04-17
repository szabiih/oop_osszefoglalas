class ViewElement {
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {string}
     */
    #id;
    
    /**
     * @param {string} id 
     */
    constructor(id) {
        this.#id = id;
        this.#div = document.createElement("div");
        this.#div.id = id;
    }

    appendTo(parent) {
        parent.appendChild(this.#div);
    }

    getId() {
        return this.#id;
    }

    getDiv() {
        return this.#div;
    }
}

// ---- ClassA ----
class ClassA extends ViewElement {
    constructor(id) {
        super(id);
        this.getDiv().innerHTML = "<h2>Ez az A nézet</h2>";
    }
}

// ---- ClassB ----
class ClassB extends ViewElement {
    constructor(id) {
        super(id);
        this.getDiv().innerHTML = "<h2>Ez a B nézet</h2>";
    }
}

export {ViewElement, ClassA, ClassB}