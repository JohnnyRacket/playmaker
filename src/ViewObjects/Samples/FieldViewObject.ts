import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { ViewObjectVisitor } from "../../Clickables/ViewObjectVisitor";

export class FieldViewObject extends DoubleBufferedViewObject{
    protected preRender() {

        //white lines around field
        
               
        
        for(let i = 0; i < 4; ++i){
        this.context.beginPath(); 
        i % 2 == 0? this.context.fillStyle = '#2ecc71' : this.context.fillStyle = '#00b168';
        this.context.rect(0,this.height/4*i ,this.width,this.height/4); 
        this.context.fill();
        this.context.closePath();
        }
        
        this.context.beginPath();         
        this.context.rect(0,0 ,this.width,this.height); 
        this.context.lineWidth = 16;
        this.context.strokeStyle = 'white';
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();         
        this.context.rect(5,this.height/4 - 3,1,1); 
        this.context.lineWidth = 4;
        this.context.strokeStyle = 'orange';
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();         
        this.context.rect(this.width - 6,this.height/4 - 3,1,1); 
        this.context.lineWidth = 4;
        this.context.strokeStyle = 'orange';
        this.context.stroke();
        this.context.closePath();
        
        this.context.beginPath();
        //this.context.clearRect(0,0,this.width,this.height); 
        this.context.font = " bold 50px Arial";
        this.context.fillStyle = "#00b168";
        this.context.fillText('WILDCAT!',(this.width - this.context.measureText('WILDCAT!').width)/2, 82);
        this.context.closePath();
    }
    update() {
        throw new Error("Method not implemented.");
        //possible set to cheering or set to something else
    }

    accept(visitor: ViewObjectVisitor){
        visitor.visitFieldObject(this);
    }

}