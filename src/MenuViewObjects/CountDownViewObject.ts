import { MenuViewObject } from './MenuViewObject';
import { ClickStrategy } from "../Clickables/ClickStrategy";
export class CountDownViewObject extends MenuViewObject {

    protected _clickStrategy: ClickStrategy = null;
    
    protected _text: string;
    public get text(): string {
        return this._text;
    }
    public set text(text: string){
        this._text;
        this.preRender();
    }
    protected preRender() {
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height);       
        this.context.font = "50px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText(this.text,(this.width - this.context.measureText(this.text).width)/2, (this.height + 25)/2);
    }

    update() {
        throw new Error("Method not implemented.");
    }
    
    public hover() {
        throw new Error('Not implemented yet.');
    }
}