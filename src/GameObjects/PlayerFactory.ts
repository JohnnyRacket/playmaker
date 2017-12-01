import { ReferenceManager } from '../Engines/ReferenceManager';
import { GameMap } from '../Engines/GameMap';
import { CenterDrawingStrategy } from '../DrawingStrategies/CenterDrawingStrategy';
import { ComposableView } from '../ViewComposition/ComposableView';
import { HitBoxFactory } from '../Collisions/HitBoxFactory';
import { ControllerFactory } from '../Controllers/ControllerFactory';
import { Route } from '../Controllers/Route';
import { GameEngine } from '../Engines/GameEngine';
import { RenderEngine } from '../Engines/RenderEngine';
import { SquarePlayerViewObject } from '../ViewObjects/Samples/SquarePlayerViewObject';
import { Player } from './Samples/Player';
import { Coordinate } from "../Controllers/Coordinate";

export class PlayerFactory{

    private hitBoxFactory: HitBoxFactory;
    private controllerFactory: ControllerFactory;

    


    public constructor(hitboxFactory: HitBoxFactory, controllerFactory: ControllerFactory){
        this.hitBoxFactory = hitboxFactory;
        this.controllerFactory = controllerFactory;
    }


    public createRunner(x: number, y: number, angle: number){
        let player = new Player(x,y,16,16,'runner',2);
        player.angle = angle;
        player.setHitbox(this.hitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = this.controllerFactory.createInputController(player);
        player.controller = controller;
        GameEngine.getInstance().register(player);

        GameMap.getInstance().addMapObject(player, 'runner');
        
        return player;
    }
    
    public createBlocker(x: number, y: number, route: Route, area: ComposableView){
        let player = new Player(x,y,16,16,'blocker',1.25);
        player.setHitbox(this.hitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = this.controllerFactory.createBlockerController(player, route);
        player.controller = controller;
        GameEngine.getInstance().register(player);
        GameMap.getInstance().addMapObject(player, 'blocker');
        return player;
    }

    public createDefender(x: number, y: number, route: Route, area: ComposableView){
        let player = new Player(x,y,16,16,'defender',1.5);
        GameEngine.getInstance().addReferenceToStage(player, "gameplayStage");
        player.setHitbox(this.hitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        let controller = this.controllerFactory.createDefenderController(player, route);
        player.controller = controller;
        GameEngine.getInstance().register(player);
        GameMap.getInstance().addMapObject(player, 'defender');
        return player;
    }

    public static removeDefenderInArea(player: Player, area: ComposableView){
        
        // player.setHitbox(HitBoxFactory.CreateActiveSquareHitBox(16,16,player));
        // let controller = ControllerFactory.createDefenderController(player, route);
        // player.setController(controller);
        // GameEngine.getInstance().register(player);
        // let playerVO = new SquarePlayerViewObject(x,y,16,16,0,player, new CenterDrawingStrategy());
        // playerVO.color = '#e74c3c';
        // player.register(playerVO);
        // area.addView(playerVO);
        // GameMap.getInstance().addMapObject(player, 'defender');
        // return player;
    }
}