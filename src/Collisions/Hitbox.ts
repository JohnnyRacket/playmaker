import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IObserver } from '../Observables/Observer.interface';

export abstract class Hitbox{
    
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected subject: CollidableGameObject;

    public constructor (width: number, height: number, subject: CollidableGameObject){
        this.width = width;
        this.height = height;
        this.subject = subject;
    }
}