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

let test2 = new VerticalCenterDecorator(gameArea);
let test = new HorizontalCenterDecorator(test2);
renderEngine.register(test);
//just the field VO
let field = new FieldViewObject(0,0,320,480,0, new TopLeftDrawingStrategy());
gameArea.addView(field);

//create the player you control youreself (runner)
PlayerFactory.createRunnerInArea(160,350, -90, gameArea);

//create blockers with aroutes
// PlayerFactory.createBlockerInArea(60,300,new Route([new Coordinate(60,200), new Coordinate(40,180)]), gameArea);
// PlayerFactory.createBlockerInArea(110,300,new Route([new Coordinate(110,200), new Coordinate(90,180)]), gameArea);
// PlayerFactory.createBlockerInArea(210,300,new Route([new Coordinate(210,200), new Coordinate(190,180)]), gameArea);
// PlayerFactory.createBlockerInArea(260,300,new Route([new Coordinate(260,200), new Coordinate(240,180)]), gameArea);
//create defenders with routes
PlayerFactory.createDefenderInArea(60,250,new Route([new Coordinate(60,120), new Coordinate(20,40)]), gameArea);
PlayerFactory.createDefenderInArea(110,250,new Route([new Coordinate(110,120), new Coordinate(70,40)]), gameArea);
PlayerFactory.createDefenderInArea(210,250,new Route([new Coordinate(210,120), new Coordinate(170,40)]), gameArea);
PlayerFactory.createDefenderInArea(260,250,new Route([new Coordinate(260,120), new Coordinate(220,40)]), gameArea);
PlayerFactory.createDefenderInArea(160,250,new Route([new Coordinate(160,120), new Coordinate(120,40)]), gameArea);

