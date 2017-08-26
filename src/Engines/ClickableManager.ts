import { Clickable } from '../Clickables/Clickable';
export class ClickableManager{

    private clickables: Clickable[] = [];

    public constructor(canvas : HTMLCanvasElement){
        canvas.addEventListener('click', (evt) => {
            this.clickEvents(evt);
        },false);

        // canvas.addEventListener('mouseover', (evt) => {
        //     this.clickEvents(evt);
        // },false);

        // canvas.addEventListener('click', (evt) => {
        //     this.clickEvents(evt);
        // },false);
    }


    private clickEvents(event: MouseEvent){
        console.log(event.x, event.y)
        this.clickables.forEach((obj: Clickable, index) => {
            if(event.x >= obj.getGlobalX() && event.x <= obj.getGlobalX() + obj.getWidth() &&
                event.y >= obj.getGlobalY() && event.x <= obj.getGlobalY() + obj.getHeight()) {
                    obj.click();
                };
            ///obj.click()
        });
    }
}