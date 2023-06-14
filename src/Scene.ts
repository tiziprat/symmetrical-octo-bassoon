import { AnimatedSprite, Container,Text, Texture,  NineSlicePlane, Sprite} from "pixi.js";
import { CatHat } from "./CatHat";

export class Scene extends Container{

    constructor(){
        super()
        
	const CatWithHat: CatHat = new CatHat();

	CatWithHat.scale.set(0.5);
	CatWithHat.x = 200;
	CatWithHat.y = 300;
    this.addChild(CatWithHat);

    const CatAnimated: AnimatedSprite = new AnimatedSprite(
        [
            Texture.from("cat"),
            Texture.from("cat6"),
            Texture.from("cat1"),
            Texture.from("cat2"),
            Texture.from("cat3"),
            Texture.from("cat4")
        ], true
    );
    CatAnimated.play();
    CatAnimated.animationSpeed = 0.3;
    this.addChild(CatAnimated);

    // const myGraph: Graphics= new Graphics()
    // //graphics
    // myGraph.lineStyle({color:0xff00ff, width:10, alpha: 1});
    // myGraph.moveTo(0,0);
    // myGraph.lineTo(300,500);
    // myGraph.lineTo(300,100);
    // myGraph.lineTo(0,0);
    // myGraph.position.set(1280/2,720/2);

    // myGraph.clear();
   
    // myGraph.lineStyle({color:0xff00ff, width:10, alpha: 1});
    // myGraph.beginFill(0x00ff00,1);
    // myGraph.drawCircle(0,0,100);
    // this.addChild(myGraph);

    // //text
    //   const myText: Text = new Text("hello world", {fontSize:100,fill:0xff0000});
    //   this.addChild(myText);
    //   myText.position.x = 500;
    //   myText.angle = 75;
    //   myText.scale.set(1);

    //   //Nine Slice Plane
    //    // const Panel: Sprite = Sprite.from("panel");
    //     const Panel = new NineSlicePlane(
    //         Texture.from("panel"),
    //         35,35,35,35
    //     );
    //     this.addChild(Panel);
    //     Panel.width = 500;
    //     Panel.height = 300;
    //     Panel.scale.set(2)

    const Cuadro = new NineSlicePlane(
        Texture.from("grass"),
        30,30,30,30
    );
    this.addChild(Cuadro);
    Cuadro.position.x = 1280/2;
    Cuadro.position.y = 150;
    Cuadro.angle = 90;
    Cuadro.scale.set(1.9);

    const LevelComplete: Sprite = Sprite.from("levelC");
    this.addChild(LevelComplete);
    LevelComplete.position.x = 300;
    LevelComplete.position.y = 50;
    LevelComplete.scale.set(1.2)

    const Ball: Sprite = Sprite.from("ball");
    this.addChild(Ball);
    Ball.scale.set(0.4);
    Ball.position.x = 308;
    Ball.position.y = 280;

    const Ball2: Sprite = Sprite.from("ball");
    this.addChild(Ball2);
    Ball2.scale.set(0.45);
    Ball2.position.x = 410;
    Ball2.position.y = 240;

    const Ball3: Sprite = Sprite.from("ball");
    this.addChild(Ball3);
    Ball3.scale.set(0.4);
    Ball3.position.x = 522;
    Ball3.position.y = 280;

    const score:Text = new Text("Score: 1000",{fontSize:50, fill:0xffffff});
    this.addChild(score);
    score.position.set(340,430);

    const TryAgain: Sprite = Sprite.from("tryAgain");
    this.addChild(TryAgain);
    TryAgain.position.set(320,550);
    TryAgain.scale.set(0.40);
    
    const Tagain: Text = new Text("Try again",{fontSize:25, fill:0xffffff});
    this.addChild(Tagain);
    Tagain.position.set(330,650);

    const nextLevel: Sprite = Sprite.from("nextLevel");
    this.addChild(nextLevel);
    nextLevel.scale.set(0.37);
    nextLevel.position.set(500,550);

    const siguiente: Text= new Text("Next Level",{fontSize:25, fill:0xffffff})
        this.addChild(siguiente);
        siguiente.position.set(500,650);

    





   

    



    }
}