import { PositionableGameObject } from '../../GameObjects/PositionableGameObject';
import { ViewObjectVisitor } from '../../Clickables/ViewObjectVisitor';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { DrawingStrategy } from '../../DrawingStrategies/DrawingStrategy';
import { Player } from '../../GameObjects/Samples/Player';
import { InputController } from '../../Controllers/InputController';
export class AbilityDots extends DoubleBufferedViewObject{
    
    public cooldown: number = 0;
    public uses: number = 2;
    private subject: PositionableGameObject;

    public constructor(x: number, y: number, width: number, height: number, angle: number, drawingStrategy: DrawingStrategy, subject: PositionableGameObject){
        super(x,y,width,height,angle,drawingStrategy);
        this.subject = subject;
        this.preRender();
    }
    protected preRender() {
        //bar bg
        this.context.beginPath();   
        this.context.fillStyle = 'black';
        this.context.rect(0,0,this.width,this.height); // Outer circle 
        this.context.fill();
        this.context.closePath();
        //bar
        this.context.beginPath();
        this.context.fillStyle = 'white';
        console.log('cooldown', this.cooldown);
        this.context.rect(0,0,this.width * ((60 - this.cooldown)/60),this.height);
        this.context.fill();
        this.context.closePath();
 

    }
    update() {
        this.x = this.subject.x;
        this.y = this.subject.y + 14;
        if(((this.subject as Player).controller as InputController).jumped > 0){
            this.cooldown = ((this.subject as Player).controller as InputController).jumped;
            this.preRender();
        }else{
            this.cooldown = 0;
        }
    }
    accept(visitor: ViewObjectVisitor) {
        throw new Error("Method not implemented.");
    }

    
}