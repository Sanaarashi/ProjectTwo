window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    class Options {
        constructor(h, w, b, f, t) {
            this.height = h;
            this.width = w;
            this.bg = b;
            this.fontSize = f;
            this.textAlign = t;
        }
        createDiv() {
            let div = document.createElement('div');
            div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; textAlign: ${this.textAlign}`;
            document.body.appendChild(div);
        }
    }

    let newDiv = new Options(300,300,'blue', 20, 'center');

    newDiv.createDiv();

    let someDiv = new Options(200,20,'green',20,'center');

    someDiv.createDiv();

});