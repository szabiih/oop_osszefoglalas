import { ViewElement } from "./viewelement.js";

class NavigationBar {
    /**
     * @type {ViewElement[]}
     */
    #viewElementList;

    /**
     * @type {HTMLDivElement}
     */
    #buttonBar;

    /**
     * @type {HTMLDivElement}
     */
    #viewContainer;

    constructor() {
        this.#viewElementList = [];

        this.#buttonBar = document.createElement("div");
        this.#viewContainer = document.createElement("div");

        document.body.appendChild(this.#buttonBar);
        document.body.appendChild(this.#viewContainer);
    }

    addViewElement(label, viewElement) {
        this.#viewElementList.push(viewElement);

        const button = document.createElement("button");
        button.innerText = label;
        button.id = "button_" + viewElement.getId();

        button.addEventListener("click", () => {
            // tartalom törlése
            this.#viewContainer.innerHTML = "";

            // új view hozzáadása
            viewElement.appendTo(this.#viewContainer);

            // active class kezelés
            const buttons = this.#buttonBar.querySelectorAll("button");
            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");
        });

        this.#buttonBar.appendChild(button);
    }

    navigate(id) {
        const button = document.getElementById("button_" + id);
        if (button) {
            button.click();
        }
    }
}

export {NavigationBar}