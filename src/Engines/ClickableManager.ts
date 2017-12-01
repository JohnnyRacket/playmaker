import { RenderEngine } from './RenderEngine';
import { ClickHandler } from '../Clickables/ClickHandlers/ClickHandler';
import { IViewService } from './IViewService';
import { Clickable } from '../Clickables/Clickable';

export class ClickableManager implements IViewService{

    private clickables: Clickable[] = [];
    public clickInterceptor: ClickHandler;
    private get scale(){
        return RenderEngine.getInstance().scale;
    }

    add(object: Object) {
        try{
            this.clickables.push(object as Clickable);
        }catch (err){
            console.log("You can only add objects of type Clickable to the ClickableManager");
        }
    }
    remove(object: Object) {
        let clickable = object as Clickable;
        this.clickables = this.clickables.filter(element => {
            if(element != clickable) return element;
        });
    }


    public constructor(canvas : HTMLCanvasElement){
        canvas.addEventListener('click', (evt) => {
            this.clickEvents(evt);
        },false);

        // canvas.addEventListener('mouseover', (evt) => {
        //     this.hoverEvents(evt);
        // },false);

        // canvas.addEventListener('click', (evt) => {
        //     this.clickEvents(evt);
        // },false);
    }


    private clickEvents(event: MouseEvent){
        //console.log(event.x, event.y)
        let x = event.x / this.scale;
        let y = event.y / this.scale;
        if(this.clickInterceptor) this.clickInterceptor.handle(event);
        else{
            this.clickables.forEach((obj: Clickable, index) => {
                if(x  >= obj.getGlobalX() && x <= (obj.getGlobalX() + obj.getWidth()) &&
                    y >= obj.getGlobalY() && y <= (obj.getGlobalY() + obj.getHeight())) {
                        console.log("click match found ", obj);
                        obj.click();
                    };
                ///obj.click()
            });
        }
    }

    // private hoverEvents(event: MouseEvent){
    //     //console.log(event.x, event.y)
    //     console.log(this.clickables);
    //     this.clickables.forEach((obj: Clickable, index) => {
    //         if(event.x >= obj.getGlobalX() && event.x <= (obj.getGlobalX() + obj.getWidth()) &&
    //             event.y >= obj.getGlobalY() && event.y <= (obj.getGlobalY() + obj.getHeight())) {
    //                 console.log("hover match found :)");
    //                 obj.hover();
    //             };
    //         ///obj.click()
    //     });
    // }

    public addClickable(clickable: Clickable){
        this.clickables.push(clickable);
    }
}