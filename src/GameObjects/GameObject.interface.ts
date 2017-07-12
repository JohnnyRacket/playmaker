import {IObservable} from '../Observable.interface'

export interface IGameObject extends IObservable{
    tick() : void;
}
