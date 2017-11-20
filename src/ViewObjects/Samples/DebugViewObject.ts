import { Dimensionable } from '../../Shared/Dimensionable';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { ViewObjectVisitor } from '../../Clickables/ViewObjectVisitor';
import { DrawingStrategy } from '../../DrawingStrategies/DrawingStrategy';
export class DebugViewObject extends DoubleBufferedViewObject{

    protected _subject: Dimensionable;
    get subject(): Dimensionable{
        return this._subject;
    }
    set subject(subject: Dimensionable){
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

    public constructor(x: number, y: number, width: number, height: number, angle: number, subject: Dimensionable, strategy: DrawingStrategy){
        super(x,y,width,height,angle, strategy);
        this.subject = subject;
        this.color = "pink";
    }

    protected preRender() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(0,0,this.width,this.height); 
        this.context.fill();
    }
    update() {
        this.height = this.subject.height;
        this.width = this.subject.width;
    }
    accept(visitor: ViewObjectVisitor) {
        throw new Error("Method not implemented.");
    }
    
}