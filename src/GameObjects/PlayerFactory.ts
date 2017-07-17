import { HitBoxFactory } from '../Collisions/HitBoxFactory';
import { ControllerFactory } from '../Controllers/ControllerFactory';
import { Route } from '../Controllers/Route';
import { GameEngine } from '../Engines/GameEngine';
import { RenderEngine } from '../Engines/RenderEngine';
import { SquarePlayerViewObject } from '../ViewObjects/Samples/SquarePlayerViewObject';
import { NewFangledSample } from './Samples/NewFangledSample';
import { Coordinate } from "../Controllers/Coordinate";

export class PlayerFactory{
    public static createRunner(x: number, y: number, angle: number){

    }

    public static createBlocker(x: number, y: number, route: Route){

    }

    public static createDefender(x: number, y: number, route: Route){
        let player = new NewFangledSample(100,100,16,16,2);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createRouteController(player, new Route([new Coordinate(300,300), new Coordinate(500,100)]));
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(0,0,16,16,0,player);
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
    }
}