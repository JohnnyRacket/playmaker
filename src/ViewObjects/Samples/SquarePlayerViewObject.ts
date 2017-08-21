import { DrawingStrategy } from '../../DrawingStrategies/DrawingStrategy';
import { PositionableGameObject } from '../../GameObjects/PositionableGameObject';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';

export class SquarePlayerViewObject extends DoubleBufferedViewObject{

    protected subject: PositionableGameObject;
    protected _color: string;
    get color(): string{
        return this._color;
    }
    set color(color: string){
        this._color = color;
        this.preRender();
    }
    protected _outline: string;
    get outline(): string{
        return this._outline;
    }
    set outline(outline: string){
        this._outline = outline;
        this.preRender();
    }

    public constructor(x: number, y: number, width: number, height: number, angle: number, subject: PositionableGameObject, strategy: DrawingStrategy){
        super(x,y,width,height,angle, strategy);
        this.subject = subject;
        this.angle = this.subject.angle;
    }

    protected preRender() {
        this.context.beginPath();
        if(this.color){
            this.context.fillStyle = this.color;
            this.context.rect(0,0,this.width,this.height); 
            this.context.fill();
        }
        if(this.outline){
            this.context.strokeStyle = this.outline;
        }
        this.context.rect(0,0,this.width,this.height); 
        this.context.stroke();
        
    }
    update() {
        this.x = this.subject.x;
        this.y = this.subject.y;
        this.angle = this.subject.angle;
    }

}