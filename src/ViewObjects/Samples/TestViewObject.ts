import {IViewObject} from './../ViewObject.interface'
import {TestGameObject} from '../../GameObjects/Samples/TestGameObject'
export class TestViewObject implements IViewObject{

    private subject: TestGameObject;
    private xPos: number;
    private yPos: number;
    private envWidth: number;
    private envHeight: number;

    public constructor(model: TestGameObject){
        this.subject = model;
    }

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        console.log('view',this.xPos,this.yPos);
        context.beginPath();
        context.arc(this.xPos, this.yPos, 10, 0, 2 * Math.PI, false);
        context.fillStyle = 'blue';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
        this.envWidth = width;
        this.envHeight = height;
    }

    public update(){
        this.xPos = this.subject.getXPosition() % this.envWidth;
        this.yPos = this.subject.getYPosition() % this.envHeight;
    }
}