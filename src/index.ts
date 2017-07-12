import {GameEngine} from './GameEngine'
import {RenderEngine} from './RenderEngine'
import {TestGameObject} from './Gameobjects/TestGameObject'
import {TestViewObject} from './ViewObjects/TestViewObject'

let canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

let gameEngine = new GameEngine();
let renderEngine = new RenderEngine(context, canvas);

console.log('hello world');

let testObject = new TestGameObject(0,0);
gameEngine.register(testObject);
gameEngine.start();

let testViewObject = new TestViewObject(testObject);
testObject.register(testViewObject);
renderEngine.register(testViewObject);
renderEngine.start();
