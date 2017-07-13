import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IObserver } from '../Observables/Observer.interface';

export abstract class Hitbox{
    
    protected _x: number;
    get x(): number{
        return this.subject.x;
    }
    protected _y: number;
    get y(): number{
        return this.subject.y;
    }
    public width: number;
    public height: number;
    public subject: CollidableGameObject;

    public constructor (width: number, height: number, subject: CollidableGameObject){
        this.width = width;
        this.height = height;
        this.subject = subject;
    }

   public collide(hitbox: Hitbox){
        this.subject.collide(hitbox.subject);
    }     
}