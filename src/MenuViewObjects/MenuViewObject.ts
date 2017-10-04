import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { ClickStrategy } from '../Clickables/ClickStrategy';
import { Clickable } from '../Clickables/Clickable';
import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
import { ViewObjectVisitor } from "../Clickables/ViewObjectVisitor";
export abstract class MenuViewObject extends DoubleBufferedViewObject implements Clickable {

    protected _clickStrategy: ClickStrategy;
    public get clickStrategy(): ClickStrategy{
        return this._clickStrategy;
    }
    public set clickStrategy(strategy: ClickStrategy){
        this._clickStrategy = strategy;
    }

    public constructor(x: number,y: number, width: number, height: number, angle: number, drawingStrategy: DrawingStrategy, clickStrategy: ClickStrategy){
        super(x,y,width,height,angle,drawingStrategy);
        this.clickStrategy = clickStrategy;
    }
    click() {
        this.clickStrategy.execute(this);
    }
    abstract hover();
    getGlobalX(): number {
        return this.globalX();
    }
    getGlobalY(): number {
        return this.globalY();
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }

    accept(visitor: ViewObjectVisitor) {
        //do nothing
    }

}