import { ComposableViewDecorator } from './ComposableViewDecorator';
export class HorizontalCenterDecorator extends ComposableViewDecorator{

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        this.view.x = width/2 - this.width/2;
        this.view.render(context, width, height);
    }
}