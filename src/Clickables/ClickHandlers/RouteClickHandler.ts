import { ComposableView } from '../../ViewComposition/ComposableView';
import { RouteViewObject } from '../../ViewObjects/Samples/RouteViewObject';
import { ControllableGameObject } from '../../GameObjects/ControllableGameObeject';
import { ClickHandler } from './ClickHandler';
import { Coordinate } from '../../Controllers/Coordinate';
export class RouteClickHandler implements ClickHandler{

    private gameObject: ControllableGameObject;
    private viewObject: RouteViewObject;
    private route: Coordinate[];
    private gameArea: ComposableView;

    public constructor(gameObject: ControllableGameObject, route: Coordinate[], viewObject: RouteViewObject, gameArea: ComposableView){
        this.gameObject = gameObject;
        this.route = route;
        this.viewObject = viewObject;
        this.gameArea = gameArea;
    }

    handle(event: MouseEvent) {
        console.log('handling intercepted click');
        this.route.push(new Coordinate(event.x - this.gameArea.x, event.y - this.gameArea.y));
        this.viewObject.updateRoute(this.route);
    }

}