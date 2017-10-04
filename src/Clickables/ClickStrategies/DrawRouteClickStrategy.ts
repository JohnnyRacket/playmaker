import { Coordinate } from '../../Controllers/Coordinate';
import { RouteController } from '../../Controllers/RouteController';
import { ControllableGameObject } from '../../GameObjects/ControllableGameObeject';
import { ClickStrategy } from '../ClickStrategy';
import { Route } from "../../Controllers/Route";
export class DrawRouteClickStrategy extends ClickStrategy {

    public execute(object: Object) {
        //needs to go into a route drawing mode
        let route = new Array<Coordinate>();
        let player = object as ControllableGameObject;
        route.push(new Coordinate(player.x, player.y));

        
        //grey out everything else and message that says click the player again to finalize the route
        //also create the route route view object



        
        let controller = player.controller as RouteController;
        controller.route = new Route(null);//TODO: fix 
    }

}