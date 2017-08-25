import { Dimensionable } from '../Shared/Dimensionable';
import { IViewObject } from '../ViewObjects/ViewObject.interface';
import { ComposableViewObject } from "../ViewObjects/ComposableViewObject";
export class ComposableView extends ComposableViewObject {

    //the idea here is to have composition pattern of relative layouts 
    protected canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    private children: IViewObject[] = [];

    public constructor(x: number, y: number, width: number, height: number){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
    }

    render(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.children.forEach((obj: IViewObject, index) => obj.render(this.context, this.canvas.width, this.canvas.height));
        context.drawImage(this.canvas, this.x, this.y);
    }

    update() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    public addView(viewObject: IViewObject){
        this.children.push(viewObject);
    }

}