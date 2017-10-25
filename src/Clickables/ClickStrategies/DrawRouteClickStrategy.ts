import { ComposableViewObject } from '../../ViewObjects/ComposableViewObject';
import {
    HorizontalCenterPositioningDecorator,
} from '../../ViewObjects/PositioningDecorators/HorizontalCenterPositioningDecorator';
import { ButtonViewObject } from '../../MenuViewObjects/ButtonViewObject';
import { ReferenceManager } from '../../Engines/ReferenceManager';
import { SquarePlayerViewObject } from '../../ViewObjects/Samples/SquarePlayerViewObject';
import { DoubleBufferedViewObject } from '../../ViewObjects/DoubleBufferedViewObject';
import { Player } from '../../GameObjects/Samples/Player';
import { XViewObject } from '../../MenuViewObjects/XViewObject';
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

    private text: ComposableViewObject;
    private player: ControllableGameObject;

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
        this.player = (object as SquarePlayerViewObject).subject;
        console.log("bloopely");
        route.push(new Coordinate(this.player.x, this.player.y));
        let routeView = new RouteViewObject(0,0,this.gameArea.width, this.gameArea.height,0,new TopLeftDrawingStrategy());
        RenderEngine.getInstance().addReferenceToStage(routeView, 'routeStage');
        this.clickableManager.clickInterceptor = new RouteClickHandler(this.player, route, routeView, this.gameArea, this.clickableManager, this);
        this.gameArea.addView(routeView);

        let text = new ButtonViewObject(10,45, 180, 50, 0, new TopLeftDrawingStrategy(), null, 'Save Route');
        this.text = new HorizontalCenterPositioningDecorator(text);
        this.gameArea.addView(this.text);
        
        //grey out everything else and message that says click the player again to finalize the route
        //also create the route route view object

        //let controller = player.controller as RouteController;
        //controller.route = new Route(route);//TODO: fix 
    }

    public finish(route: Coordinate[]){
        route.splice(0,1);
        (this.player.controller as RouteController).route = new Route(route);
        console.log((this.player.controller as RouteController).route);
        this.gameArea.remove(this.text);
    }

}