import { ClickableViewObject } from "./ClickableViewObject";
import { ScoreKeeper } from "../Engines/ScoreKeeper";
import { DrawingStrategy } from "../DrawingStrategies/DrawingStrategy";
import { ClickStrategy } from "../Clickables/ClickStrategy";

export class ScoreViewObject extends ClickableViewObject{

    public score: number = 0;
    public constructor(x: number,y: number, width: number, height: number, angle: number,drawingStratgegy: DrawingStrategy, clickStrategy: ClickStrategy, callback: Function){
        super(x,y,width,height,angle,drawingStratgegy,clickStrategy,callback);
        ScoreKeeper.getInstance().register(this);
        this.update();
    }
    preRender(){
        this.context.beginPath();
        this.context.clearRect(0,0,this.width,this.height); 
        this.context.font = " bold 24px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.fillText("Score: " + this.score,(this.width - this.context.measureText("Score: " + this.score).width)/2, (this.height + 12)/2);
    }

    update(){
        this.score = ScoreKeeper.getInstance().score;
        this.preRender();
    }

    public hover() {
        throw new Error('Not implemented yet.');
    }
}