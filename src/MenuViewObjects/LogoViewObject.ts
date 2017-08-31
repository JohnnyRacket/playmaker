import { MenuViewObject } from './MenuViewObject';
export class LogoViewObject extends MenuViewObject{
    hover() {
        throw new Error("Method not implemented.");
    }
    protected preRender() {
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height); 
        this.context.font = " bold 50px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText('Play Maker',(this.width - this.context.measureText('Play Maker').width)/2, (this.height + 12)/2);
    }
    update() {
        throw new Error("Method not implemented.");
    }

}