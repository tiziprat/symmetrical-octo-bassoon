import { Container, Sprite } from "pixi.js";

export class CatHat extends Container{

    constructor(){
        super();
        const cat: Sprite = Sprite.from("./cat5.png");
        console.log("hola mundo! ", cat.width, cat.height); 
        //clampy.anchor.set(0.5);
        const hat: Sprite = Sprite.from("gorra");
        hat.position.set(180,-120);
        hat.scale.set(1.8);
        hat.angle = -20;
        this.addChild(cat);
        this.addChild(hat);
    }
    }



