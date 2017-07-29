import { DrawingStrategy } from './DrawingStrategy';
export class TopLeftDrawingStrategy implements DrawingStrategy{
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
        context.drawImage(canvas, x, y);
    }

}