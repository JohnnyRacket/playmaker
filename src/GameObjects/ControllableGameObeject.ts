import { Controller } from '../Controllers/Controller';
import { CollidableGameObject } from './CollidableGameObject';

export abstract class ControllableGameObject extends CollidableGameObject{
    protected _speed: number;
    get speed(): number{
        return this._speed;
    }
    set speed(speed: number){
        this._speed = speed;
    }

    protected controller: Controller;

    public setController(controller: Controller){
        this.controller = controller;
    }
    public removeController(){
        this.controller = null;
    }

    public constructor (x: number, y: number, width: number, height: number, speed: number){
        super(x,y,width,height);
        this.speed = speed;
    }
}