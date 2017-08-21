import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { ICollidable } from '../GameObjects/ICollidable';
import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export abstract class Controller implements IGameObject, ICollidable{

    protected subject: ControllableGameObject;
    protected active: boolean = true;

    public constructor(subject: ControllableGameObject){
        this.subject = subject;
    }

    tick(): void {
        if(this.active) this.run();
    }

    protected run(){
        this.decide();
        this.act();
    }

    abstract decide();
    abstract act();
    abstract collide(object: CollidableGameObject);

    public deactivate(){
        this.active = false;
    }
    public activate(){
        this.active = true;
    }
    
}