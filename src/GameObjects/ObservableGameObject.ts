import { Observable } from '../Observables/Observable';
import { IGameObject } from './GameObject.interface';

export abstract class ObservableGameObject extends Observable implements IGameObject{
    abstract tick();
}