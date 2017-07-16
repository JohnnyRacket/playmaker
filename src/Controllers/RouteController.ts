import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { Controller } from './Controller';
import { Coordinate } from './Coordinate';
import { Route } from './Route';

export class RouteController extends Controller{

    //I expect this class to change as we think about what needs to happen
    protected route: Route;
    protected started: boolean = true;
    protected angle: number = 0;;
    protected routeIndex: number = 0;
    //more to come, need ot think through collisions first

    public constructor(subject: ControllableGameObject, route: Route){
        super(subject);
        this.route = route;
    }

    decide() {
        let location = new Coordinate(this.subject.x, this.subject.y);
        let destination = this.route.getPoint(this.routeIndex);
        if(Math.round(location.x) == Math.round(destination.x) && Math.round(location.y) == Math.round(destination.y)){
            this.routeIndex++;
            if(this.routeIndex < this.route.numPoints){
                destination = this.route.getPoint(this.routeIndex);
            }else{
                //route is complete
            }
        }
        this.angle = Math.atan2(destination.y - location.y, destination.x - location.x,);
        console.log(this.angle);
    }
    act() {
        this.subject.x += this.subject.speed * Math.cos(this.angle);
        this.subject.y += this.subject.speed * Math.sin(this.angle);
    }
    
}