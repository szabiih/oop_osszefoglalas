import { Color } from "./color.js";

class RenderCallback {
    /**
    * @param {Color[]} colorList
    * @returns {void}
    */
    render(colorList) {
        console.log("Render:", colorList);
    }
}

export {RenderCallback}