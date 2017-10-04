import { Coordinate } from '../../Controllers/Coordinate';
import { DoubleBufferedViewObject } from '../DoubleBufferedViewObject';
import { ViewObjectVisitor } from "../../Clickables/ViewObjectVisitor";
export class RouteViewObject extends DoubleBufferedViewObject {
    
    private route: Coordinate[] = [];

    protected preRender() {
        console.log(this);
        if(this.route && this.route.length > 1){//literal typescript bug imo
            console.log("blooperblip");
            this.context.beginPath();
            this.context.moveTo(this.route[0].x, this.route[0].y);

            this.context.strokeStyle = "#ffff00";
            this.context.lineWidth = 5;
            
            for(let i = 1; i < this.route.length; ++i){
                this.context.lineTo(this.route[i].x, this.route[i].y);
                this.context.stroke();
            }
            //TODO: set color of route
            
            
        }
    }
    update() {
        console.log(this.route);
        this.preRender();
    }
    accept(visitor: ViewObjectVisitor) {
        //do nothing
    }
    updateRoute(route: Coordinate[]){
        console.log("bluerbele");
        console.log(route);
        this.route = route;
        console.log(this.route);
        this.update();
    }

}