import { DrawingStrategy } from './DrawingStrategy';
export class CenterDrawingStrategy implements DrawingStrategy{
    calculateGlobalPositionXEffect(x: number, width: number): number {
        return x - width/2;
    }
    calculateGlobalPositionYEffect(y: number, height: number): number {
        return y - height/2;
    }
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
        context.drawImage(canvas, x - width/2, y - height/2);
    }

}