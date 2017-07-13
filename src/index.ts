import {GameEngine} from './Engines/GameEngine';
import {RenderEngine} from './Engines/RenderEngine';
import {TestGameObject} from './GameObjects/Samples/TestGameObject';
import {TestViewObject} from './ViewObjects/Samples/TestViewObject';

/*
 * Fetch our environment for our game and configure
 */
const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/*
 * Declare game engines (constant because they will not be changed)
 */ 
const gameEngine = new GameEngine();
const renderEngine = new RenderEngine(context, canvas);

let testObject = new TestGameObject(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height, 5, 45);
gameEngine.register(testObject);
gameEngine.start();

let testViewObject = new TestViewObject(testObject);
testObject.register(testViewObject);
renderEngine.register(testViewObject);
renderEngine.start();

<<<<<<< HEAD
let testObject2 = new TestGameObject(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height, 8, 45);
=======
let testObject2 = new TestGameObject(0, 60, canvas.width, canvas.height, 3, -45);
>>>>>>> 655bc83f6c398eecd7c42c4bbc90c410b8df6d04
gameEngine.register(testObject2);
let testViewObject2 = new TestViewObject(testObject2);
testObject2.register(testViewObject2);
renderEngine.register(testViewObject2);