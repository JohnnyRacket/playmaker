import { PositionableGameObject } from '../../GameObjects/PositionableGameObject';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';

export class SquarePlayerViewObject extends DoubleBufferedViewObject{

    protected subject: PositionableGameObject;

    public constructor(x: number, y: number, width: number, height: number, angle: number, subject: PositionableGameObject){
        super(x,y,width,height,angle);
        this.subject = subject;
        this.angle = this.subject.angle;
    }

    protected preRender() {
        this.context.beginPath();
        this.context.rect(0,0,this.width,this.height); 
        this.context.stroke();
    }
    update() {
        this.x = this.subject.x;
        this.y = this.subject.y;
        this.angle = this.subject.angle;
    }

}