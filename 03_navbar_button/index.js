import { ViewElement, ClassA, ClassB } from "./viewelement.js";
import { NavigationBar } from "./navigationbar.js";

const nav = new NavigationBar();

const a = new ClassA("classA");
const b = new ClassB("classB");

nav.addViewElement("A nézet", a);
nav.addViewElement("B nézet", b);

nav.navigate("classA");