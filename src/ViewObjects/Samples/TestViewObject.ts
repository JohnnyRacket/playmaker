import {IViewObject} from './../ViewObject.interface'
import {TestGameObject} from '../../GameObjects/Samples/TestGameObject'
export class TestViewObject implements IViewObject{

    private subject: TestGameObject;
    private xPos: number;
    private yPos: number;
    private envWidth: number;
    private envHeight: number;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public constructor(model: TestGameObject){
        this.subject = model;
        this.preRender();
    }

    private preRender(){
        this.canvas = document.createElement('canvas');
        this.canvas.width = 64;
        this.canvas.height = 64;
        this.context = this.canvas.getContext('2d');
        this.context.beginPath();
        this.context.arc(32, 32, 10, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'blue';
        this.context.fill();
        this.context.lineWidth = 5;
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

        context.drawImage(this.canvas, this.xPos, this.yPos);
    }

    public update(){
        this.xPos = Math.round(this.subject.getXPosition());
        this.yPos = Math.round(this.subject.getYPosition());
    }
}