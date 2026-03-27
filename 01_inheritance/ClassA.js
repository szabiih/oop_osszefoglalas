import {ParentViewElementClass} from "./ParentViewElementClass.js";

class ClassA extends ParentViewElementClass {
    constructor() {
        super('childA');

        const body = document.createElement('div');
        body.innerText = "CHildA"

        this.div.appendChild(body)
    }
}

export {ClassA}