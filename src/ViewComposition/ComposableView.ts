import { Dimensionable } from '../Shared/Dimensionable';
import { IViewObject } from '../ViewObjects/ViewObject.interface';
import { ComposableViewObject } from "../ViewObjects/ComposableViewObject";
import { ViewObjectVisitor } from "../Clickables/ViewObjectVisitor";
import { RenderEngine } from '../Engines/RenderEngine';
export class ComposableView extends ComposableViewObject {

    //the idea here is to have composition pattern of relative layouts 
    protected canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    private children: IViewObject[] = [];

    // get x(){
    //     return this._x * RenderEngine.getInstance().scale;
    // }
    // set x(x: number){
    //     this._x = x / RenderEngine.getInstance().scale;
    // }
    // get width(){
    //     console.log("widht",this._width);
    //     console.log("scale", RenderEngine.getInstance().scale);
    //     return this._width * RenderEngine.getInstance().scale;
    // }
    // set width(width: number){
    //     this._width = width / RenderEngine.getInstance().scale;
    // }

    // get y(){
    //     return this._y * RenderEngine.getInstance().scale;
    // }
    // set y(y: number){
    //     this._y = y / RenderEngine.getInstance().scale;
    // }
    // get height(){
    //     return this._height * RenderEngine.getInstance().scale;
    // }
    // set height(height: number){
    //     this._height = height / RenderEngine.getInstance().scale;
    // }

    public constructor(x: number, y: number, width: number, height: number){
        super();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
    }

    render(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.children.forEach((obj: IViewObject, index) => obj.render(this.context, this.canvas.width, this.canvas.height));
        context.drawImage(this.canvas, this.x, this.y);
    }

    update() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    public addView(viewObject: ComposableViewObject){
        viewObject.parent = this;
        this.children.push(viewObject);
    }

    public remove(object: IViewObject){

        this.children = this.children.filter(element => {
            if(element != object) return element;
        });

        this.children.forEach(child => {
            child.remove(object);
        });
    }

    accept(visitor: ViewObjectVisitor) {
        this.children.forEach(child => {
            child.accept(visitor);
        });
    }

}