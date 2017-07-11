import {GameEngine} from './GameEngine'
import {RenderEngine} from './RenderEngine'
import {GameObject} from './Gameobjects/GameObject'
import {ViewObject} from './ViewObjects/ViewObject'

let canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

let gameEngine = new GameEngine();
let renderEngine = new RenderEngine(ctx);

console.log('hello world');

// let testObject = new GameObject();
// gameEngine.register(testObject);
// gameEngine.start();

let testViewObject = new ViewObject();
renderEngine.register(testViewObject);
renderEngine.start();
