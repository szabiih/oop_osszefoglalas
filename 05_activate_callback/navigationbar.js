import { ViewElement } from "./viewelement.js";

class NavigationBar{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList;

    /**
     * @type {HTMLDivElement}
     */
    #buttonbar;

    /**
     * @type {HTMLDivElement}
     */
    #viewContainer;

    constructor() {
        this.#viewElementList = [];

        this.#buttonbar = document.createElement('div');
        this.#buttonbar.id = 'navbar';
        this.#viewContainer = document.createElement('div');

        document.body.appendChild(this.#buttonbar);
        document.body.appendChild(this.#viewContainer);
    }

    /**
     * 
     * @param {string} label
     * @param {ViewElement} viewElement
     * @returns {void}
     */
    addViewElement(label, viewElement) {
        this.#viewElementList.push(viewElement);

        const buttonbar = document.createElement('div');
        buttonbar.classList.add('buttonbar');

        const button = document.createElement('button');
        button.innerText = label;
        button.addEventListener('click', () => {
            this.navigate(viewElement.id);
        });

        buttonbar.appendChild(button);
        this.#buttonbar.appendChild(buttonbar);

        viewElement.appendTo(this.#viewContainer);
        viewElement.div.style.display = 'none';
    }

    /**
     * @param {string} id
     * @returns {void}
     */
    navigate(id) {
        const buttons = this.#buttonbar.querySelectorAll('button');

        for (const button of buttons) {
            button.classList.remove('active');
        }


        for (let i = 0; i < this.#viewElementList.length; i++) {
            if (this.#viewElementList[i].id === id) {
                this.#viewElementList[i].div.style.display = 'block';
                this.#viewElementList[i].navigate();
                buttons[i].classList.add('active');
            } else {
                this.#viewElementList[i].div.style.display = 'none';
            }
        }
    }
}

export {NavigationBar};