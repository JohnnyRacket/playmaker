import { ControllableGameObject } from '../GameObjects/ControllableGameObeject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export abstract class Controller implements IGameObject{

    protected subject: ControllableGameObject;
    protected active: boolean = true;

    tick(): void {
        if(this.active) this.run();
    }

    protected run(){
        this.decide();
        this.act();
    }

    abstract decide();
    abstract act();

    public deactivate(){
        this.active = false;
    }
    public activate(){
        this.active = true;
    }
    
}