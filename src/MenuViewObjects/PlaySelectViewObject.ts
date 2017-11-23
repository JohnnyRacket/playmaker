import { Coordinate } from '../Controllers/Coordinate';
import { ClickableViewObject } from './ClickableViewObject';
import { SquarePlayerViewObject } from '../ViewObjects/Samples/SquarePlayerViewObject';
import { CenterDrawingStrategy } from '../DrawingStrategies/CenterDrawingStrategy';
import { DrawingStrategy } from '../DrawingStrategies/DrawingStrategy';
import { ClickStrategy } from '../Clickables/ClickStrategy';
export class PlaySelectViewObject extends ClickableViewObject{

    private playerVOs: SquarePlayerViewObject[] = [
        new SquarePlayerViewObject(0,0,16,16,0,null, new CenterDrawingStrategy()),
        new SquarePlayerViewObject(0,0,16,16,0,null, new CenterDrawingStrategy()),
        new SquarePlayerViewObject(0,0,16,16,0,null, new CenterDrawingStrategy()),
        new SquarePlayerViewObject(0,0,16,16,0,null, new CenterDrawingStrategy()),
    ]
    private positions: Coordinate[];

    public constructor(x: number,y: number, width: number, height: number, angle: number,drawingStratgegy: DrawingStrategy, clickStrategy: ClickStrategy, callback: Function, positions: Coordinate[]){
        super(x,y,width,height,angle,drawingStratgegy,clickStrategy,callback);
        this.playerVOs.forEach(playerVO => {
            playerVO.color = "#e74c3c";
        });
        this.positions = positions;
    }

    hover() {
        throw new Error("Method not implemented.");
    }
    protected preRender() {
        this.context.beginPath();
    }
    update() {
        throw new Error("Method not implemented.");
    }
    public updatePositions(positions: Coordinate[]){
        this.positions = positions;
    }

}