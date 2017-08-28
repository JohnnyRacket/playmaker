import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { ClickStrategy } from '../Clickables/ClickStrategy';
import { Clickable } from '../Clickables/Clickable';
import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
export abstract class MenuViewObject extends DoubleBufferedViewObject implements Clickable{

    protected clickStrategy: ClickStrategy;

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

}