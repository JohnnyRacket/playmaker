import { ClickHandler } from "./ClickHandler";
import { InputController } from "../../Controllers/InputController";

export class TouchPlayHandler implements ClickHandler{


    private inputController: InputController;

    public constructor(inputController: InputController){
        this.inputController = inputController;
    }

    handleClick(x: number, y: number) {
        console.log(event);
        //do nothing
    }
    handleMouseDown(x: number, y: number) {
        console.log(event);
        if(x > 160){
            this.inputController.onKeyDown(39);
        }
        if(x < 160){
            this.inputController.onKeyDown(37);
        }
    }
    handleMouseUp(x: number, y: number) {


            this.inputController.onKeyUp(39);

            this.inputController.onKeyUp(37);

    }

}