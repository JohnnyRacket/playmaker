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
        let player = new NewFangledSample(x,y,16,16,2);
        player.angle = angle;
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createInputController(player);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player);
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
        return player;
    }

    public static createBlocker(x: number, y: number, route: Route){
        let player = new NewFangledSample(x,y,16,16,2);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createRouteController(player, route);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player);
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
        return player;
    }

    public static createDefender(x: number, y: number, route: Route){
        let player = new NewFangledSample(x,y,16,16,2);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createRouteController(player, route);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player);
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
        return player;
    }
}