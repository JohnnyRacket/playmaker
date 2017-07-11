import array = require('lodash/array');

export class GameEngine{

    private observers: GameObject[];

    public tick(){
        this.observers.forEach((obj: GameObject, index) => obj.update());
    }

    public register(obj: GameObject){
        this.observers.push(obj);
    }
    public unregister(obj: GameObject){
        array.pull(this.observers, obj);
    }
}