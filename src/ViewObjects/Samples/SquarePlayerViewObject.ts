import { Clickable } from '../../Clickables/Clickable';
import { ControllableGameObject } from '../../GameObjects/ControllableGameObeject';
import { ViewObjectVisitor } from '../../Clickables/ViewObjectVisitor';
import { DrawingStrategy } from '../../DrawingStrategies/DrawingStrategy';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { ClickableViewObject } from '../../MenuViewObjects/ClickableViewObject';

export class SquarePlayerViewObject extends ClickableViewObject{


    protected _subject: ControllableGameObject;
    get subject(): ControllableGameObject{
        return this._subject;
    }
    set subject(subject: ControllableGameObject){
        this._subject = subject;
    }
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

    public constructor(x: number, y: number, width: number, height: number, angle: number, subject: ControllableGameObject, strategy: DrawingStrategy){
        super(x,y,width,height,angle, strategy, null);
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

    accept(visitor: ViewObjectVisitor){
        visitor.visitPlayerObject(this);
    }

    hover() {
        throw new Error("Method not implemented.");
    }

}