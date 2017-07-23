import { Clickable } from '../Clickables/Clickable';
export class ClickableManager{

    private clickables: Clickable[];

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
        this.clickables.forEach((obj: Clickable, index) => obj.click());
    }
}