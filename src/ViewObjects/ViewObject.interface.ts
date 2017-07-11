export interface IViewObject{
    /*
    * function to draw to the canvas
    */
    render(context: CanvasRenderingContext2D, width: number, height: number);
}