import { IGameObject } from './GameObject.interface';

export class GameObject implements IGameObject {
    constructor() {}
    public update(){
        console.log('game engine running');
    }
}
