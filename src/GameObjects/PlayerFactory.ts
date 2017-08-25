import { GameMap } from '../Engines/GameMap';
import { CenterDrawingStrategy } from '../DrawingStrategies/CenterDrawingStrategy';
import { ComposableView } from '../ViewComposition/ComposableView';
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
        let player = new NewFangledSample(x,y,16,16,'runner',2);
        player.angle = angle;
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createInputController(player);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        playerVO.color = '#3498db';
        playerVO.outline = '#ffffff';
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
        
        return player;
    }
        public static createRunnerInArea(x: number, y: number, angle: number, area: ComposableView){
        let player = new NewFangledSample(x,y,16,16,'runner',1.75);
        player.angle = angle;
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createInputController(player);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        playerVO.color = '#3498db';
        playerVO.outline = '#ffffff';
        player.register(playerVO);
        area.addView(playerVO);
        GameMap.getInstance().addMapObject(player, 'runner');
        return player;
    }

    public static createBlocker(x: number, y: number, route: Route){
        let player = new NewFangledSample(x,y,16,16,'blocker',2);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createRouteController(player, route);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
        return player;
    }

    public static createDefender(x: number, y: number, route: Route){
        let player = new NewFangledSample(x,y,16,16,'defender',1);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createRouteController(player, route);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        player.register(playerVO);
        RenderEngine.getInstance().register(playerVO);
        return player;
    }

    public static createBlockerInArea(x: number, y: number, route: Route, area: ComposableView){
        let player = new NewFangledSample(x,y,16,16,'blocker',1.25);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createBlockerController(player, route);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        playerVO.color = '#3498db';
        player.register(playerVO);
        area.addView(playerVO);
        GameMap.getInstance().addMapObject(player, 'blocker');
        return player;
    }

    public static createDefenderInArea(x: number, y: number, route: Route, area: ComposableView){
        let player = new NewFangledSample(x,y,16,16,'defender',1.5);
        player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = ControllerFactory.createDefenderController(player, route);
        player.setController(controller);
        GameEngine.getInstance().register(player);
        let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        playerVO.color = '#e74c3c';
        player.register(playerVO);
        area.addView(playerVO);
        GameMap.getInstance().addMapObject(player, 'defender');
        return player;
    }
}