import { ComposableViewDecorator } from './ComposableViewDecorator';
export class VerticalCenterDecorator extends ComposableViewDecorator{

    public render(context: CanvasRenderingContext2D, width: number, height: number){
        //can set x/y here
        //console.log(height, this.height);
        this.view.y = height/2 - this.height/2;
        this.view.render(context, width, height);
    }
}