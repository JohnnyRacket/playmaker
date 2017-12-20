export interface ClickHandler{
    handleClick(event: MouseEvent, scale: number);
    handleMouseDown(event: MouseEvent, scale: number);
    handleMouseUp(event: MouseEvent, scale: number);
}