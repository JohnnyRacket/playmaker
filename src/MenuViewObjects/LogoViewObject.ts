import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { ClickableViewObject } from './ClickableViewObject';
import { ClickStrategy } from '../Clickables/ClickStrategy';
export class LogoViewObject extends ClickableViewObject{

    public text: string;
    public color: string;
    public constructor(x: number,y: number, width: number, height: number, angle: number,drawingStratgegy: DrawingStrategy, clickStrategy: ClickStrategy, callback: Function, text: string){
        super(x,y,width,height,angle,drawingStratgegy,clickStrategy,callback);
        this.text = text;
        this.preRender();
    } 
    hover() {
        throw new Error("Method not implemented.");
    }
    protected preRender() {
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height); 
        this.context.font = " bold 50px Arial";
        if(this.color) this.context.fillStyle = this.color;
        else this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text,(this.width - this.context.measureText(this.text).width)/2, (this.height + 12)/2);
    }
    update() {
        throw new Error("Method not implemented.");
    }

}