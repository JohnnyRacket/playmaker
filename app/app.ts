import {GameEngine} from './GameEngine'
import {RenderEngine} from './RenderEngine'

let canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let ctx: CanvasRenderingContext2D = canvas.getContext("2d");

let gameEngine = new GameEngine();
let renderEngine = new RenderEngine(ctx);

console.log('hello world');
