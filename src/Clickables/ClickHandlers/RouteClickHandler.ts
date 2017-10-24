import { RouteViewObject } from '../../ViewObjects/Samples/RouteViewObject';
import { ControllableGameObject } from '../../GameObjects/ControllableGameObeject';
import { ClickHandler } from './ClickHandler';
export class RouteClickHandler implements ClickHandler{

    private gameObject: ControllableGameObject;
    private viewObject: RouteViewObject;

    public constructor(gameObject: ControllableGameObject, viewObject: RouteViewObject){
        this.gameObject = gameObject;
        this.viewObject = viewObject;
    }

    handle(x: number, y: number) {
        throw new Error("Method not implemented.");
    }

}