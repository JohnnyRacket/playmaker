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

    public static createInputController(subject: ControllableGameObject, angle: number): InputController{
        let controller = new InputController(subject, angle);
        GameEngine.getInstance().controllerManager.addController(controller);
        return controller;
    }
}