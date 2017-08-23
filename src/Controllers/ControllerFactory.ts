import { DefenderController } from './DefenderController';
import { BlockerController } from './BlockerController';
import { GameEngine } from '../Engines/GameEngine';
import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { InputController } from './InputController';
import { Route } from './Route';
import { RouteController } from './RouteController';

export class ControllerFactory{

    public static createRouteController(subject: ControllableGameObject, route: Route): RouteController{
        let controller = new RouteController(subject, route);
        GameEngine.getInstance().controllerManager.addController(controller);
        return controller;
    }

    public static createInputController(subject: ControllableGameObject): InputController{
        let controller = new InputController(subject);
        GameEngine.getInstance().controllerManager.addController(controller);
        return controller;
    }

    public static createBlockerController(subject: ControllableGameObject, route: Route): RouteController{
        let controller = new BlockerController(subject, route);
        GameEngine.getInstance().controllerManager.addController(controller);
        return controller;
    }
    public static createDefenderController(subject: ControllableGameObject, route: Route): RouteController{
        let controller = new DefenderController(subject, route);
        GameEngine.getInstance().controllerManager.addController(controller);
        return controller;
    }
}