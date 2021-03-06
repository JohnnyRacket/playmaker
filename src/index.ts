import { FieldFactory } from './GameObjects/FieldFactory';
import { RouteViewObject } from './ViewObjects/Samples/RouteViewObject';
import { ReferenceManager } from './Engines/ReferenceManager';
import { FindMatchClickStrategy } from './Clickables/ClickStrategies/FindMatchClickStrategy';
import { MatchTemplater } from './Engines/MatchTemplater';
import { HorizontalCenterPositioningDecorator } from './ViewObjects/PositioningDecorators/HorizontalCenterPositioningDecorator';
import { LogoViewObject } from './MenuViewObjects/LogoViewObject';
import { ClickableManager } from './Engines/ClickableManager';
import { PauseViewObject } from './MenuViewObjects/PauseViewObject';
import { PauseGameClickStrategy } from './Clickables/ClickStrategies/PauseGameClickStrategy';
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
import { Player } from './GameObjects/Samples/Player';
import { NonMovingSample } from './GameObjects/Samples/NonMovingSample';
import { TestGameObject } from './GameObjects/Samples/TestGameObject';
import { FieldViewObject } from './ViewObjects/Samples/FieldViewObject';
import { SquarePlayerViewObject } from './ViewObjects/Samples/SquarePlayerViewObject';
import { VerticalCenterDecorator } from "./ViewComposition/Decorators/VerticalCenterDecorator";
import { ButtonViewObject } from "./MenuViewObjects/ButtonViewObject";
import { PlayerViewObjectFactory } from './ViewObjects/PlayerViewObjectFactory';
import { AbilityDots } from './ViewObjects/Samples/AbilityDots';
import { CenterDrawingStrategy } from './DrawingStrategies/CenterDrawingStrategy';

/*
 * Fetch our environment for our game and configure
 */
const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const wrapper = <HTMLDivElement> document.getElementById("canvasWrapper");

canvas.height = wrapper.clientHeight;
canvas.width = wrapper.clientWidth;

const gameEngine = GameEngine.getInstance();
const renderEngine = RenderEngine.getInstance();

let scale = 0;
function resize(){
    canvas.height = wrapper.clientHeight;
    canvas.width = wrapper.clientWidth;
    let yScale = canvas.height/480;
    let xScale = canvas.width/320;
    scale = (xScale <= yScale)? xScale : yScale;
    console.log(scale);
    context.scale(scale, scale);
    renderEngine.scale = scale;
}
resize();

window.addEventListener('resize', resize);

/*
 * Declare game engines (constant because they will not be changed, also are singletons)
 */ 

renderEngine.scale = scale;
renderEngine.setCanvas(canvas, context);
//gameEngine.start();
renderEngine.start();

//services
let collisionManager = new CollisionManager();
let clickManager = new ClickableManager(canvas);

gameEngine.addService(collisionManager);//should be added first for consistent behaviour (no issue if its not really though)

renderEngine.addService(clickManager);
//factories

let hitBoxFactory = new HitBoxFactory(collisionManager);
let controllerFactory = new ControllerFactory(collisionManager, clickManager);
let playerFactory = new PlayerFactory(hitBoxFactory, controllerFactory);
let playerViewObjectFactory = new PlayerViewObjectFactory();
let fieldFactory = new FieldFactory(hitBoxFactory, controllerFactory);
//create a composable view for game area to exist in
let gameArea = new ComposableView(0,0,320,480);
let templater = new MatchTemplater(gameArea, playerFactory, playerViewObjectFactory, fieldFactory, clickManager, collisionManager);

let test2 = new VerticalCenterDecorator(gameArea);
let test = new HorizontalCenterDecorator(test2);
renderEngine.register(test);
//just the field VO
let field = new FieldViewObject(0,0,320,480,0, new TopLeftDrawingStrategy());
gameArea.addView(field);
//pause button test
let pauseButton = new PauseViewObject(0,0,64,64,0,new TopLeftDrawingStrategy(),new PauseGameClickStrategy(), null);
clickManager.addClickable(pauseButton);
//gameArea.addView(pauseButton);

//logo
var logo = new LogoViewObject(0,30,300,100,0,new TopLeftDrawingStrategy(),new PauseGameClickStrategy(), null, 'WILDCAT!');
var logoCenter = new HorizontalCenterPositioningDecorator(logo);
gameArea.addView(logoCenter);
RenderEngine.getInstance().addReferenceToStage(logoCenter, 'menuStage');



//main menu buttons
var startButton = new ButtonViewObject(100,170,200,60,0,new TopLeftDrawingStrategy(), new FindMatchClickStrategy(), "Single Player", null);
var startButtonCenter = new HorizontalCenterPositioningDecorator(startButton);
clickManager.addClickable(startButtonCenter);
gameArea.addView(startButtonCenter);
RenderEngine.getInstance().addReferenceToStage(startButtonCenter, 'menuStage');

var defenseButton = new ButtonViewObject(100,250,200,60,0,new TopLeftDrawingStrategy(), new PauseGameClickStrategy(), "Instructions", null);
var defenseButtonCenter = new HorizontalCenterPositioningDecorator(defenseButton);
clickManager.addClickable(defenseButtonCenter);
gameArea.addView(defenseButtonCenter);
RenderEngine.getInstance().addReferenceToStage(defenseButtonCenter, 'menuStage');

// var testRouteRender = new RouteViewObject(0,0,gameArea.width, gameArea.height,0,new TopLeftDrawingStrategy());
// testRouteRender.updateRoute([new Coordinate(160,250), new Coordinate(160,150), new Coordinate(170,100)]);
// gameArea.addView(testRouteRender);
//create the player you control youreself (runner)
//PlayerFactory.createRunnerInArea(160,400, -90, gameArea);

// //create blockers with aroutes
// PlayerFactory.createBlockerInArea(110,300,new Route([new Coordinate(60,280)]), gameArea);
// PlayerFactory.createBlockerInArea(145,300,new Route([new Coordinate(110,280)]), gameArea);
// PlayerFactory.createBlockerInArea(180,300,new Route([new Coordinate(150,280)]), gameArea);
// PlayerFactory.createBlockerInArea(230,300,new Route([new Coordinate(260,280)]), gameArea);
// //create defenders with routes
// PlayerFactory.createDefenderInArea(60,250,new Route([new Coordinate(80,270)]), gameArea);
// PlayerFactory.createDefenderInArea(110,250,new Route([new Coordinate(130, 270)]), gameArea);
// PlayerFactory.createDefenderInArea(160,250,new Route([new Coordinate(160,150), new Coordinate(170,100)]), gameArea);
// PlayerFactory.createDefenderInArea(260,250,new Route([new Coordinate(240,270)]), gameArea);
// PlayerFactory.createDefenderInArea(210,250,new Route([new Coordinate(190,270)]), gameArea);

