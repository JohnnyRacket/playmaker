import { GameMap } from '../Engines/GameMap';
import { RouteController } from './RouteController';
export class BlockerController extends RouteController{

    public decide(){
        if(!this.routeComplete()){
            this.followRoute();
        }else{
            //look for defenders to tackle
            GameMap.getInstance().getAllOfType('defender');
            
        }
    }

    public collide(){

    }
}