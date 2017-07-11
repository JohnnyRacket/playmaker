import {IViewObject} from './ViewObject.interface'

export class ViewObject implements IViewObject{
    public render(context: CanvasRenderingContext2D, width: number, height: number){
        console.log('render loop trigger');
        context.beginPath();
        context.arc(width/2, height/2, 10, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
    }
}