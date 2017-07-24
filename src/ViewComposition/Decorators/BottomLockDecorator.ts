import { ComposableView } from '../ComposableView';
export class HorizontalCenterDecorator extends ComposableView{

    protected view: ComposableView;

    get x(): number{
        return this.view.x;
    }
    get y(): number{
        return this.view.y;
    }
    get width(): number{
        return this.view.width;
    }
    get height(): number{
        return this.view.height;
    }

    public constructor(view: ComposableView){
        super(view.x, view.y, view.width, view.height);
    }

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.y = height - this.height;
        this.view.render(context, width, height);
    }
}