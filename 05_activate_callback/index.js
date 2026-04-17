import { Color } from './color.js';
import { Manager } from './manager.js';
import { Table } from './table.js';
import { Gomb } from './gomb.js';
import { NavigationBar } from './navigationbar.js';
import data from './data.json' with { type: 'json' };

const colors = [];
for (const color of data.arr) {
    colors.push(new Color(color.szin));
}

const manager = new Manager(colors);
const table = new Table(manager);
const gomb = new Gomb(manager);
const navigationBar = new NavigationBar();

navigationBar.addViewElement("Tábla", table);
navigationBar.addViewElement("Gomb", gomb);