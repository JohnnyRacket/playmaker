import { ClickableManager } from '../Engines/ClickableManager';
import { CollisionManager } from '../Engines/CollisionManager';
import { DefenderController } from './DefenderController';
import { BlockerController } from './BlockerController';
import { GameEngine } from '../Engines/GameEngine';
import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { InputController } from './InputController';
import { Route } from './Route';
import { RouteController } from './RouteController';

export class ControllerFactory{

    private collisionManager: CollisionManager;
    private clickableManager: ClickableManager;

    public constructor (collisionManager: CollisionManager, clickableManager: ClickableManager){
        this.collisionManager = collisionManager;
        this.clickableManager = clickableManager;
    }

    public createRouteController(subject: ControllableGameObject, route: Route): RouteController{
        let controller = new RouteController(subject, route, this.collisionManager);
        GameEngine.getInstance().register(controller);
        return controller;
    }

    public createInputController(subject: ControllableGameObject): InputController{
        let controller = new InputController(subject, this.collisionManager,this.clickableManager);
        GameEngine.getInstance().register(controller);
        return controller;
    }

    public createBlockerController(subject: ControllableGameObject, route: Route): RouteController{
        let controller = new BlockerController(subject, route, this.collisionManager);
        GameEngine.getInstance().register(controller);
        return controller;
    }
    public createDefenderController(subject: ControllableGameObject, route: Route): RouteController{
        let controller = new DefenderController(subject, route, this.collisionManager);
        GameEngine.getInstance().register(controller);
        return controller;
    }
}