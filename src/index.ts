import { HitBoxFactory } from './Collisions/HitBoxFactory';
import { ControllerFactory } from './Controllers/ControllerFactory';
import { Coordinate } from './Controllers/Coordinate';
import { Route } from './Controllers/Route';
import { CollisionManager } from './Engines/CollisionManager';
import { GameEngine } from './Engines/GameEngine';
import { RenderEngine } from './Engines/RenderEngine';
import { NewFangledSample } from './GameObjects/Samples/NewFangledSample';
import { NonMovingSample } from './GameObjects/Samples/NonMovingSample';
import { TestGameObject } from './GameObjects/Samples/TestGameObject';
import { TestViewObject } from './ViewObjects/Samples/TestViewObject';

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
const gameEngine = GameEngine.getInstance();
const renderEngine = RenderEngine.getInstance();
renderEngine.setCanvas(canvas, context);

let testObject = new NewFangledSample(100,100,32,32,1);
testObject.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(32,32,testObject));
let controller = ControllerFactory.createRouteController(testObject, new Route([new Coordinate(300,300), new Coordinate(500,100)]));
testObject.setController(controller);
gameEngine.register(testObject);
gameEngine.start();

let testViewObject = new TestViewObject(testObject);
testObject.register(testViewObject);
renderEngine.register(testViewObject);
renderEngine.start();

let testObject2 = new NonMovingSample(200,100,32,32);
testObject2.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(32,32,testObject2));
gameEngine.register(testObject2);
let testViewObject2 = new TestViewObject(testObject2);
testObject2.register(testViewObject2);
renderEngine.register(testViewObject2);


// let testObject = new TestGameObject(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height, 5, 45);
// gameEngine.register(testObject);
// gameEngine.start();

// let testViewObject = new TestViewObject(testObject);
// testObject.register(testViewObject);
// renderEngine.register(testViewObject);
// renderEngine.start();

// let testObject2 = new TestGameObject(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height, 15, 45);
// gameEngine.register(testObject2);
// let testViewObject2 = new TestViewObject(testObject2);
// testObject2.register(testViewObject2);
// renderEngine.register(testViewObject2);


