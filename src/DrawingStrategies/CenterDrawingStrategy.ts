import { DrawingStrategy } from './DrawingStrategy';
export class CenterDrawingStrategy implements DrawingStrategy{
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
        context.drawImage(canvas, x + width/2, y + height/2);
    }

}