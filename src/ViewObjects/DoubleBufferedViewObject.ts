import { IViewObject } from './ViewObject.interface';

export abstract class DoubleBufferedViewObject implements IViewObject{

    protected _x: number;
    get x(): number{
        return this._x;
    }
    set x(x: number){
        this._x = x;
    }

    protected _y: number;
    get y(): number{
        return this._y;
    }
    set y(y: number){
        this._y = y;
    }

    protected _width: number;
    get width(): number{
        return this._width;
    }
    set width(width: number){
        this._width = width;
    }

    protected _height: number;
    get height(): number{
        return this._height;
    }
    set height(height: number){
        this._height = height;
    }
    protected _angle;
    get angle(): number{
        return this._angle;
    }
    set angle(angle: number){
        this._angle = angle;
    }

    protected readonly canvas: HTMLCanvasElement;
    protected readonly context: CanvasRenderingContext2D;

    public constructor(x: number, y: number, width: number, height: number, angle: number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.preRender();
    }

    protected abstract preRender();

    public render(context: CanvasRenderingContext2D, width: number, height: number){
    context.save();

    context.translate(this.x, this.y);
    context.rotate(this.angle); 
    context.translate(-this.x,-this.y);

    context.drawImage(this.canvas, this.x - this.width/2, this.y - this.height/2);


    context.restore();

    }
        
    abstract update();

}