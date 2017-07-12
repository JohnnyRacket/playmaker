import {IGameObject} from './GameObject.interface'
import { ObservableGameObject } from './ObservableGameObject';
import { IObserver } from "../Observables/Observer.interface";

export abstract class PositionableGameObject extends ObservableGameObject{

    protected x: number;
    protected y: number;

    public setXPosition(x: number){
        this.x = x;
    }

    public setYPosition(y: number){
        this.y = y;
    }

    public setPosition(x: number, y: number){
        this.setXPosition(x);
        this.setYPosition(y);
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