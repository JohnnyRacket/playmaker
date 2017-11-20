import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { ViewObjectVisitor } from "../../Clickables/ViewObjectVisitor";

export class FieldViewObject extends DoubleBufferedViewObject{
    protected preRender() {
        for(let i = 0; i < 4; ++i){
        i % 2 == 0? this.context.fillStyle = '#2ecc71' : this.context.fillStyle = '#00b168';
        this.context.beginPath();
        this.context.rect(0,this.height/4*i ,this.width,this.height/4); 
        this.context.fill();
        }
        // this.context.beginPath();
        // this.context.rect(0,0 ,this.width,this.height); 
        // this.context.lineWidth = 40;
        // this.context.strokeStyle = 'white';
        // this.context.stroke();
    }
    update() {
        throw new Error("Method not implemented.");
        //possible set to cheering or set to something else
    }

    accept(visitor: ViewObjectVisitor){
        visitor.visitFieldObject(this);
    }

}