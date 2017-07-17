import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';

export class PlayerViewObject extends DoubleBufferedViewObject{
    
    protected preRender() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }

}