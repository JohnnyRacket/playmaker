import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { ICollidable } from '../GameObjects/ICollidable';
import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export abstract class Controller implements IGameObject, ICollidable{

    protected subject: ControllableGameObject;
    protected active: boolean = true;
    public colliding: boolean = false;

    public constructor(subject: ControllableGameObject){
        this.subject = subject;
    }

    tick(): void {
        if(this.active) this.run();
    }

    protected run(){
        this.decide();
        this.act();
        this.colliding = false;
    }

    abstract decide();
    abstract act();
    collide(object: CollidableGameObject){
        this.colliding = true;
    }

    public deactivate(){
        this.active = false;
    }
    public activate(){
        this.active = true;
    }

    public dispose(): void {
        //do nothing
    }
    
}