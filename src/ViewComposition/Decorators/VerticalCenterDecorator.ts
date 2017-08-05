import { ComposableView } from '../ComposableView';
export class HorizontalCenterDecorator extends ComposableView{

    protected view: ComposableView;

    get x(): number{
        return this.view.x;
    }
    set x(x: number){
        this._x = x;
    }
    get y(): number{
        return this.view.y;
    }
    set y(y: number){
        this._y = y;
    }
    get width(): number{
        return this.view.width;
    }
    set width(width: number){
        this._width = width;
    }
    get height(): number{
        return this.view.height;
    }
    set height(height: number){
        this._height = height;
    }

    public constructor(view: ComposableView){
        super(view.x, view.y, view.width, view.height);
        this.view = view;
    }

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.y = height/2 - this.height/2;
        this.view.render(context, width, height);
    }
}