
class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    addDiv(text){
        let div = document.createElement('div');
        document.body.appendChild(div);
        console.log(div);
        div.textContent = text;
            div.style.cssText = `height: ${this.height + 'px'};
                width: ${this.width + 'px'};
                background-color: ${this.bg};
                font-size: ${this.fontSize + 'px'};
                text-align: ${this.textAlign};
            `;
    }
}
let options = new Options(100, 200, 'yellow', 30, 'center' );
options.addDiv('Hello, World!');