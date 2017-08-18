import { HorizontalCenterDecorator } from './ViewComposition/Decorators/HorizontalCenterDecorator';
import { TopLeftDrawingStrategy } from './DrawingStrategies/TopLeftDrawingStrategy';
import { ComposableView } from './ViewComposition/ComposableView';
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
import { VerticalCenterDecorator } from "./ViewComposition/Decorators/VerticalCenterDecorator";

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

//create a composable view for game area to exist in
let gameArea = new ComposableView(100,100,320,480);
console.log(gameArea.x, gameArea.y, gameArea.width, gameArea.height);

let test2 = new VerticalCenterDecorator(gameArea);
let test = new HorizontalCenterDecorator(test2);
renderEngine.register(test);
//just the field VO
let field = new FieldViewObject(0,0,320,480,0, new TopLeftDrawingStrategy());
gameArea.addView(field);

//create the player you control youreself
PlayerFactory.createRunnerInArea(120,340, -90, gameArea);

//create a player with a route
PlayerFactory.createBlockerInArea(60,240,new Route([new Coordinate(60,120), new Coordinate(20,80)]), gameArea);
PlayerFactory.createBlockerInArea(110,240,new Route([new Coordinate(110,120), new Coordinate(70,80)]), gameArea);
PlayerFactory.createBlockerInArea(210,240,new Route([new Coordinate(210,120), new Coordinate(170,80)]), gameArea);
PlayerFactory.createBlockerInArea(260,240,new Route([new Coordinate(260,120), new Coordinate(220,80)]), gameArea);


