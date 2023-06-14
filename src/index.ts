import { Application,Loader, } from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scene';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6743ed,
	width: 1280,
	height: 720
});
window.addEventListener("resize",()=>{
	console.log("rezized!");
const scaleX = window.innerWidth / app.screen.width;
const scaleY = window.innerHeight / app.screen.height;
const scale = Math.min(scaleX, scaleY);

const gameWidht = Math.round (app.screen.width * scale);
const gameHight = Math.round (app.screen.height * scale);
const marginHorizontal = Math.floor(( window.innerWidth - gameWidht)/2);
const marginVertical = Math.floor((window.innerHeight - gameHight)/2);


app.view.style.width = gameWidht + "px";
app.view.style.height = gameHight + "px";

app.view.style.marginLeft = marginHorizontal + "px";
app.view.style.marginRight = marginHorizontal + "px";
app.view.style.marginTop = marginVertical +"px";
app.view.style.marginBottom = marginVertical + "px";
} )
window.dispatchEvent(new Event("resize"));

Loader.shared.add(assets);

Loader.shared.onComplete.add(()=>{
	const MyScene = new Scene();
	app.stage.addChild(MyScene);
	
})

Loader.shared.load();


