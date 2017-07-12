import { PositionableGameObject } from '../GameObjects/PositionableGameObject';

export abstract class Controller{

    protected subject: PositionableGameObject;

    public constructor(subject: PositionableGameObject){
        this.subject = subject;
    }
}