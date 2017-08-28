import { MenuViewObject } from './MenuViewObject';
import { DrawingStrategy } from "../DrawingStrategies/DrawingStrategy";
import { ClickStrategy } from "../Clickables/ClickStrategy";
export class ButtonViewObject extends MenuViewObject {

    protected _text: string;
    public get text(): string{
        return this._text;
    }
    public set text(text: string){
        this._text = text;
    }

    private isHovered: boolean = false;

    public constructor(x: number,y: number, width: number, height: number, angle: number, drawingStrategy: DrawingStrategy, clickStrategy: ClickStrategy, text: string){
        super(x,y,width,height,angle,drawingStrategy,clickStrategy);
        this.text = text;
        this.preRender();
    }

    protected preRender() {
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height);       
        this.context.fillStyle = "#3498db";
        this.context.rect(0,0 ,this.width,this.height); 
        this.context.fill();
        //bottom side
        if(!this.isHovered){
            this.context.beginPath();        
            this.context.fillStyle = "#2980b9";
            this.context.rect(0,this.height/10 * 9 ,this.width,this.height/10); 
            this.context.fill();
        }

        //text
        this.context.strokeStyle = "#c8f7c5"
        this.context.lineWidth = 10;
        this.context.rect(0,0 ,this.width,this.height); 
        //this.context.stroke();
        this.context.font = "24px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text,(this.width - this.context.measureText(this.text).width)/2, (this.height + 12)/2);
    }
    update() {
        throw new Error("Method not implemented.");
    }

    hover(){
        //get rid of bottom thing
        this.isHovered = true;
        this.preRender();
    }
    postRender(){
        this.isHovered = false;
        this.preRender();
    }

}