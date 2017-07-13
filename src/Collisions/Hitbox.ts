import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IObserver } from '../Observables/Observer.interface';

export abstract class Hitbox{
    
    protected subject: CollidableGameObject;

    protected _width: number;
    get width(): number{
        return this._width;
    }

    protected _height: number;
    get height(): number{
        return this._height;
    }
 
    protected _x: number;
    get x(): number{
        return this.subject.x;
    }
    
    protected _y: number;
    get y(): number{
        return this.subject.y;
    }

    public constructor  (width: number, height: number, subject: CollidableGameObject){
        this._width = width;
        this._height = height;
        this.subject = subject;
    }

   public collide(hitbox: Hitbox){
        this.subject.collide(hitbox.subject);
    }     
}