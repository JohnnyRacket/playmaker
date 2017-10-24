import { RenderEngine } from '../../Engines/RenderEngine';
import { ComposableView } from '../../ViewComposition/ComposableView';
import { RouteViewObject } from '../../ViewObjects/Samples/RouteViewObject';
import { RouteClickHandler } from '../ClickHandlers/RouteClickHandler';
import { ClickableManager } from '../../Engines/ClickableManager';
import { Coordinate } from '../../Controllers/Coordinate';
import { RouteController } from '../../Controllers/RouteController';
import { ControllableGameObject } from '../../GameObjects/ControllableGameObeject';
import { ClickStrategy } from '../ClickStrategy';
import { Route } from "../../Controllers/Route";
import { TopLeftDrawingStrategy } from '../../DrawingStrategies/TopLeftDrawingStrategy';

export class DrawRouteClickStrategy extends ClickStrategy {

    private clickableManager: ClickableManager;
    private gameArea: ComposableView;

    constructor(clickableManager: ClickableManager, gameArea: ComposableView){
        super();
        this.clickableManager = clickableManager;
        this.gameArea = gameArea;
        console.log("created clickable ");
    }

    public execute(object: Object) {
        console.log("draw route strategy called");
        //needs to go into a route drawing mode
        let route: Coordinate[] = [];
        let player = object as ControllableGameObject;
        console.log("bloopely");
        route.push(new Coordinate(player.x, player.y));
        let routeView = new RouteViewObject(0,0,this.gameArea.width, this.gameArea.height,0,new TopLeftDrawingStrategy());
        this.clickableManager.clickInterceptor = new RouteClickHandler(player, route, routeView, this.gameArea);
        this.gameArea.addView(routeView);
        
        //grey out everything else and message that says click the player again to finalize the route
        //also create the route route view object

        //let controller = player.controller as RouteController;
        //controller.route = new Route(route);//TODO: fix 
    }

}