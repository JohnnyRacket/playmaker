import { NewFangledSample } from '../../GameObjects/Samples/NewFangledSample';
import { TestGameObject } from '../../GameObjects/Samples/TestGameObject';
import { IViewObject } from './../ViewObject.interface';
export class TestViewObject implements IViewObject{

    private subject: NewFangledSample;
    private xPos: number;
    private yPos: number;
    private envWidth: number;
    private envHeight: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public constructor(model: NewFangledSample){
        this.subject = model;
        this.preRender();
    }

    private preRender(){
        this.canvas = document.createElement('canvas');
        this.canvas.width = 32;
        this.canvas.height = 32;
        this.context = this.canvas.getContext('2d');
        this.context.beginPath();
        this.context.arc(16, 16, 15, 0, 16, false);
        this.context.fillStyle = 'blue';
        this.context.fill();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#003300';
        this.context.stroke();

        this.context.drawImage(this.canvas, 0, 0);
    }

    

    public render(context: CanvasRenderingContext2D, width: number, height: number){

        //console.log('view',this.xPos,this.yPos);
        // context.beginPath();
        // context.arc(this.xPos, this.yPos, 10, 0, 2 * Math.PI, false);
        // context.fillStyle = 'blue';
        // context.fill();
        // context.lineWidth = 5;
        // context.strokeStyle = '#003300';
        // context.stroke();

        context.drawImage(this.canvas, this.xPos - 16, this.yPos - 16);
    }

    public update(){
        console.log("view x", this.subject.x);
        this.xPos = Math.round(this.subject.x);
        this.yPos = Math.round(this.subject.y);
    }
}