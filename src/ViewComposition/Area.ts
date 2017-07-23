import { Dimensionable } from '../Shared/Dimensionable';
import { IViewObject } from '../ViewObjects/ViewObject.interface';
export class Area extends Dimensionable implements IViewObject{

    //the idea here is to have composition pattern of relative layouts 
    protected
    protected canvas: HTMLCanvasElement;

    public constructor(x: number, y: number, width: number, height: number){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render(context: CanvasRenderingContext2D, width: number, height: number) {
        context.drawImage(this.canvas, this.x, this.y);
    }

    update() {
        throw new Error("Method not implemented.");
    }
}