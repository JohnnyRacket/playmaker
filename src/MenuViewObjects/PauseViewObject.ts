import { ClickableViewObject } from './ClickableViewObject';
export class PauseViewObject extends ClickableViewObject {

    protected preRender() {
        //draw a beautiful pause button :p
        this.context.beginPath();
        this.context.rect(0,0 ,this.width/3,this.height); 
        this.context.fill();

        this.context.rect(this.width/3*2,0 ,this.width/3,this.height); 
        this.context.fill();
    }
    update() {
        //probably do nothing?
        throw new Error("Method not implemented.");
    }
    hover(){
        //do nothing
    }
    

}