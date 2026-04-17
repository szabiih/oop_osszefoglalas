class Color {
    /**
     * @type {string}
     */
    #szin;

    constructor(szin) {
        this.#szin = szin;
    }

    getSzin() {
        return this.#szin;
    }
}

export {Color}