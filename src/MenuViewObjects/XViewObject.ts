import { ClickableViewObject } from './ClickableViewObject';
export class XViewObject extends ClickableViewObject{
    hover() {
        throw new Error("Method not implemented.");
    }
    protected preRender() {
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height); 
        this.context.font = " bold 40px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText('Finish Route',(this.width - this.context.measureText('Finish Route').width)/2, (this.height + 12)/2);
    }
    update() {
        throw new Error("Method not implemented.");
    }
    
}