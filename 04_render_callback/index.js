import { Color } from "./color.js";
import { RenderCallback } from "./rendercallback.js";
import { Manager } from "./manager.js";
import { TableElement, ButtonElement, EmptyButtonElement } from "./other.js";

// 1. Adatok
const colors = [
    new Color("kék"),
    new Color("zöld"),
    new Color("piros"),
    new Color("lila"),
    new Color("sárga"),
    new Color("barna")
];

// 2. Manager
const manager = new Manager(colors);

// 3. UI elemek
const table = new TableElement(manager);
const buttonAll = new ButtonElement(manager);
const buttonEmpty = new EmptyButtonElement(manager);

// 4. Callback összekötése
class TableRenderCallback extends RenderCallback {
    constructor(tableElement) {
        super();
        this.tableElement = tableElement;
    }

    render(colorList) {
        this.tableElement.render(colorList);
    }
}

manager.setRenderCallback(new TableRenderCallback(table));

// 5. DOM-ba helyezés
buttonAll.appendTo(document.body);
buttonEmpty.appendTo(document.body);

// cím
const title = document.createElement("h3");
title.textContent = "Elemek";
document.body.appendChild(title);

// kezdeti szöveg
const info = document.createElement("p");
info.textContent = "Még nem történt callback hívás";
document.body.appendChild(info);

// táblázat
table.appendTo(document.body);