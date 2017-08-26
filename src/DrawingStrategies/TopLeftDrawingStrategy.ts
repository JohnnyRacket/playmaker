import { DrawingStrategy } from './DrawingStrategy';
export class TopLeftDrawingStrategy implements DrawingStrategy{
    calculateGlobalPositionXEffect(x: number, width: number): number {
        return x;
    }
    calculateGlobalPositionYEffect(y: number, height: number): number {
        return y;
    }
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number) {
        context.drawImage(canvas, x, y);
    }

}