export interface DrawingStrategy{
    draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number);
    calculateGlobalPositionXEffect(x: number, width: number): number;
    calculateGlobalPositionYEffect(y: number, height: number): number;
}