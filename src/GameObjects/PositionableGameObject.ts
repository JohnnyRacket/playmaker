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

    protected _width: number;
    get width(): number{
        return this._width;
    }
    set width(width: number){
        this._width = width;
    }

    protected _height: number;
    get height(): number{
        return this._height;
    }
    set height(height: number){
        this._height = height;
    }

    public constructor(x: number, y: number, width: number, height: number){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public setSize(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public setPosition(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    abstract tick();

}