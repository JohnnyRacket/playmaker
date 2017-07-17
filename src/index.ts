import { HitBoxFactory } from './Collisions/HitBoxFactory';
import { ControllerFactory } from './Controllers/ControllerFactory';
import { Coordinate } from './Controllers/Coordinate';
import { Route } from './Controllers/Route';
import { CollisionManager } from './Engines/CollisionManager';
import { GameEngine } from './Engines/GameEngine';
import { RenderEngine } from './Engines/RenderEngine';
import { PlayerFactory } from './GameObjects/PlayerFactory';
import { NewFangledSample } from './GameObjects/Samples/NewFangledSample';
import { NonMovingSample } from './GameObjects/Samples/NonMovingSample';
import { TestGameObject } from './GameObjects/Samples/TestGameObject';
import { FieldViewObject } from './ViewObjects/Samples/FieldViewObject';
import { SquarePlayerViewObject } from './ViewObjects/Samples/SquarePlayerViewObject';
import { TestViewObject } from './ViewObjects/Samples/TestViewObject';

/*
 * Fetch our environment for our game and configure
 */
const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/*
 * Declare game engines (constant because they will not be changed, also are singletons)
 */ 
const gameEngine = GameEngine.getInstance();
const renderEngine = RenderEngine.getInstance();
renderEngine.setCanvas(canvas, context);
gameEngine.start();
renderEngine.start();

//just the field VO
let field = new FieldViewObject(400,300,320,480,0);
renderEngine.register(field);

//create the player you control youreself
PlayerFactory.createRunner(400,500, -90);

//create a player with a route
PlayerFactory.createBlocker(400,450,new Route([new Coordinate(400,350), new Coordinate(500,250)]));


