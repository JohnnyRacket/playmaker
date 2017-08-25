import { Coordinate } from '../Controllers/Coordinate';
import { IViewObject } from './ViewObject.interface';
import { Dimensionable } from "../Shared/Dimensionable";
export abstract class ComposableViewObject extends Dimensionable implements IViewObject {

    protected _parent: ComposableViewObject;
    public get parent(): ComposableViewObject{
        return this._parent
    }
    public set parent(parent: ComposableViewObject){
        this._parent = parent;
    }

    abstract render(context: CanvasRenderingContext2D, width: number, height: number);
    abstract update();

    public calculateGlobalPosition(): Coordinate{
        if(this.parent){

        } //do stuff here 
        return new Coordinate(0,0);
    }
}