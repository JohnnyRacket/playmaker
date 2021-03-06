import { Coordinate } from '../../Controllers/Coordinate';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { ViewObjectVisitor } from "../../Clickables/ViewObjectVisitor";
export class RouteViewObject extends DoubleBufferedViewObject {
    
    private route: Coordinate[] = [];

    protected preRender() {
        if(this.route && this.route.length > 1){//literal typescript bug imo
            this.context.beginPath();
            this.context.moveTo(this.route[0].x, this.route[0].y);

            this.context.strokeStyle = "#ffff00";
            this.context.lineWidth = 8;
            
            for(let i = 1; i < this.route.length; ++i){
                this.context.lineTo(this.route[i].x, this.route[i].y);
                this.context.stroke();
            }            
            
        }
    }
    update() {
        this.preRender();
    }
    accept(visitor: ViewObjectVisitor) {
        //do nothing
    }
    updateRoute(route: Coordinate[]){
        this.route = route;
        this.update();
    }


}