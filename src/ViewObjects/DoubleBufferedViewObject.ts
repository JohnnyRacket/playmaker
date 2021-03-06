import { ComposableViewObject } from './ComposableViewObject';
import { Dimensionable } from '../Shared/Dimensionable';
import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { IViewObject } from './ViewObject.interface';
import { ViewObjectVisitor } from "../Clickables/ViewObjectVisitor";

export abstract class DoubleBufferedViewObject extends ComposableViewObject{

    protected _angle;
    get angle(): number{
        return this._angle;
    }
    set angle(angle: number){
        this._angle = angle;
    }

    protected _drawingStrategy: DrawingStrategy;
    get drawingStrategy(): DrawingStrategy{
        return this._drawingStrategy;
    }
    set drawingStrategy(strategy: DrawingStrategy){
        this._drawingStrategy = strategy;
    }

    protected readonly canvas: HTMLCanvasElement;
    protected readonly context: CanvasRenderingContext2D;

    public constructor(x: number, y: number, width: number, height: number, angle: number, strategy: DrawingStrategy){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.drawingStrategy = strategy;
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

        this.drawingStrategy.draw(context, this.canvas, this.x, this.y, this.width, this.height);

        context.restore();
        this.postRender();
    }
        
    abstract update();
    public postRender(){
        //do nothing
    }

    abstract accept(visitor: ViewObjectVisitor);

    public globalX(): number{
        if(this.parent){
            return this.x + this.parent.globalX() + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        }else{
            return this.x + this.drawingStrategy.calculateGlobalPositionXEffect(this.width);
        } 
    }

    public globalY(): number{
        if(this.parent){
            return this.y + this.parent.globalY() + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        }else{
            return this.y + this.drawingStrategy.calculateGlobalPositionYEffect(this.height);
        } 
    }
}