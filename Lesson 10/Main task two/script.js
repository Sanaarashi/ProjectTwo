window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    class Options {
        constructor(h = 500, w = 500, b = 'grey', f = 14, t = 'center') {
            this.height = h;
            this.width = w;
            this.bg = b;
            this.fontSize = f;
            this.textAlign = t;
        }
        createDiv() {
            let div = document.createElement('div'),
                someText = document.createTextNode('May the Force be with you');
            div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
            div.appendChild(someText);
            document.body.appendChild(div);
        }
    }

    let newDiv = new Options(300, 300, '#aeaeae', 20, 'center');

    newDiv.createDiv();

    let someDiv = new Options(200, 500, 'green', 20, 'center');

    someDiv.createDiv();

});