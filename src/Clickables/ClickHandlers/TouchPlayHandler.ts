import { ClickHandler } from "./ClickHandler";
import { InputController } from "../../Controllers/InputController";

export class TouchPlayHandler implements ClickHandler{


    private inputController: InputController;

    public constructor(inputController: InputController){
        this.inputController = inputController;
    }

    handleClick(event: MouseEvent, scale: number) {
        console.log(event);
        //do nothing
    }
    handleMouseDown(event: MouseEvent, scale: number) {
        console.log(event);
        let x = event.offsetX / scale;
        if(x > 160){
            this.inputController.onKeyDown(39);
        }
        if(x < 160){
            this.inputController.onKeyDown(37);
        }
    }
    handleMouseUp(event: MouseEvent, scale: number) {
        console.log(event);
        let x = event.offsetX / scale;
        if(x > 160){
            this.inputController.onKeyUp(39);
        }
        if(x < 160){
            this.inputController.onKeyUp(37);
        }
    }

}