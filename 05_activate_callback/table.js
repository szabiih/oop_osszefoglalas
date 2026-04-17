import { ViewElement } from "./viewelement.js";
import { Manager } from "./manager.js";
import { Color } from "./color.js";

class Table extends ViewElement{
    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @param {Manager} manager
     */
    constructor(manager){
        super("table");
        this.#manager = manager;

        this.table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const th = document.createElement("th");
        th.innerText = "Elemek";
        headerRow.appendChild(th);
        this.table.appendChild(headerRow);
        this.div.appendChild(this.table);

        this.#manager.renderCallback = (colorList) => this.render(colorList);

        this.activateCallback = () => {
            this.#manager.getAllElement();
        };
    }

    /**
     * @param {Color[]} colorList 
     */
    render(colorList){
        this.table.innerHTML = "";

        const headerRow = document.createElement("tr");
        const th = document.createElement("th");
        th.innerText = "Elemek";
        headerRow.appendChild(th);
        this.table.appendChild(headerRow);

        if (colorList.length == 0) {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerText = "Ures lista";
            tr.appendChild(td);
            this.table.appendChild(tr);
        } else {
            for (const color of colorList) {
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerText = color.szin;
                tr.appendChild(td);
                this.table.appendChild(tr);
            }
        }
    }
}

export {Table};