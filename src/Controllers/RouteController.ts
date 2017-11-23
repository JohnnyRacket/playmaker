import { MapObject } from '../GameObjects/MapObject';
import { GameEngine } from '../Engines/GameEngine';
import { CollisionManager } from '../Engines/CollisionManager';
import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { Controller } from './Controller';
import { Coordinate } from './Coordinate';
import { Route } from './Route';
import { CollidableGameObject } from "../GameObjects/CollidableGameObject";

export class RouteController extends Controller{

    //I expect this class to change as we think about what needs to happen
    protected _route: Route;
    public get route(): Route{
        return this._route;
    }
    public set route(route: Route){
        this._route = route;
    }
    protected started: boolean = true;
    protected routeIndex: number = 0;
    protected originalSpeed: number = 0;
    private collisionManager: CollisionManager;
    //more to come, need ot think through collisions first

    public constructor(subject: ControllableGameObject, route: Route, collisionManager: CollisionManager){
        super(subject);
        this.route = route;
        this.originalSpeed = subject.speed;
        this.collisionManager = collisionManager;
    }

    decide() {
        this.followRoute();
    }
    act() {
        //add pre-emptive collision checking to avoid overlap;
        if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x + this.subject.speed * Math.cos(this.subject.angle), this.subject.y )){
            this.subject.x += this.subject.speed * Math.cos(this.subject.angle);
        }
        if(!this.collisionManager.collisionCheckAtPosition(this.subject, this.subject.x, this.subject.y + this.subject.speed * Math.sin(this.subject.angle))){
            this.subject.y += this.subject.speed * Math.sin(this.subject.angle);
        }
    }

    protected withinRange(number: number, rangeCenter: number, delta: number): boolean{
        return number > (rangeCenter - delta) && number < (rangeCenter + delta);
    }

    protected followRoute(){
        if(!this.routeComplete()){
            let location = new Coordinate(this.subject.x, this.subject.y);
            let destination = this.route.getPoint(this.routeIndex);
            if(this.withinRange(Math.round(location.x), Math.round(destination.x), this.subject.speed) && this.withinRange(Math.round(location.y), Math.round(destination.y), this.subject.speed)){
                this.routeIndex++;
            }else{
                this.subject.angle = Math.atan2(destination.y - location.y, destination.x - location.x); 
            }
            
        }else{
            //console.log('my route is complete');
        }
    }

    protected calculateDistance(object: MapObject): number{
        return Math.sqrt(Math.pow(this.subject.x - object.object.x, 2) + Math.pow(this.subject.y - object.object.y, 2));
    }
    protected routeComplete(): boolean{
        if(!this.route) return true;
        return this.routeIndex >= this.route.numPoints;
    }
    protected endRoute(){
        if(this.route) this.routeIndex += this.route.numPoints;
    }
    
}
