import { StickerTextViewObject } from '../../MenuViewObjects/StickerTextViewObject';
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
import { LogoViewObject } from '../../MenuViewObjects/LogoViewObject';

export class DrawRouteClickStrategy extends ClickStrategy {

    private clickableManager: ClickableManager;
    private gameArea: ComposableView;

    private text: ComposableViewObject;
    private text2: ComposableViewObject;
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

        let text = new StickerTextViewObject(10,20, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "Click Endzone");
        text.backgroundColor = '#2ecc71';
        let text2 = new StickerTextViewObject(10,60, 280, 50, 0, new TopLeftDrawingStrategy(), null, null, "To Save Route");
        text2.backgroundColor = '#2ecc71';
        this.text = new HorizontalCenterPositioningDecorator(text);
        this.gameArea.addView(this.text);
        this.text2 = new HorizontalCenterPositioningDecorator(text2);
        this.gameArea.addView(this.text2);
        
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
        this.gameArea.remove(this.text2);
    }

}