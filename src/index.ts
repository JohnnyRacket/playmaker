import {GameEngine} from './Engines/GameEngine'
import {RenderEngine} from './Engines/RenderEngine'
import {TestGameObject} from './GameObjects/Samples/TestGameObject'
import {TestViewObject} from './ViewObjects/Samples/TestViewObject'

/*
 * Fetch our environment for our game and configure
 */
const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d");

/*
 * Declare game engines (constant because they will not be changed)
 */ 
const gameEngine = new GameEngine();
const renderEngine = new RenderEngine(context, canvas);

let testObject = new TestGameObject(0,0);
gameEngine.register(testObject);
gameEngine.start();

let testViewObject = new TestViewObject(testObject);
testObject.register(testViewObject);
renderEngine.register(testViewObject);
renderEngine.start();

let testObject2 = new TestGameObject(100,100);
gameEngine.register(testObject2);
let testViewObject2 = new TestViewObject(testObject2);
testObject2.register(testViewObject2);
renderEngine.register(testViewObject2);