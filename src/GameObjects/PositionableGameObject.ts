import {IGameObject} from './GameObject.interface'
import { ObservableGameObject } from './ObservableGameObject';
import { IObserver } from "../Observables/Observer.interface";

export abstract class PositionableGameObject extends ObservableGameObject{

    protected _x: number;
    get x(): number{
        return this._x;
    }
    set x(x: number){
        this._x = x;
    }

    protected _y: number;
    get y(): number{
        return this._y;
    }
    set y(y: number){
        this._y = y;
    }

    public constructor(x: number, y: number){
        super();
        this.x = x;
        this.y = y;
    }

    public setPosition(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public deltaXPosition(delta: number){
        this.x += delta;
    }
    public deltaYPosition(delta: number){
        this.y += delta;
    }
    public deltaPosition(deltaX: number, deltaY: number){
        this.deltaXPosition(deltaX);
        this.deltaYPosition(deltaY);
    }

    abstract tick();

}