import { GameMap } from '../Engines/GameMap';
import { Endzone } from './Samples/Endzone';
import { HitBoxFactory } from "../Collisions/HitBoxFactory";
import { ControllerFactory } from "../Controllers/ControllerFactory";

export class FieldFactory{

    private hitBoxFactory: HitBoxFactory;
    private controllerFactory: ControllerFactory;


    public constructor(hitboxFactory: HitBoxFactory, controllerFactory: ControllerFactory){
        this.hitBoxFactory = hitboxFactory;
        this.controllerFactory = controllerFactory;
    }


    public CreateEndZone(x: number, y: number){
        let endzone = new Endzone(x,y,320,120,'endzone');
        endzone.setHitbox(this.hitBoxFactory.CreatePassiveSquareHitBox(320,120,endzone));
        //GameEngine.getInstance().register(player);

        GameMap.getInstance().addMapObject(endzone, 'endzone');
        return endzone;
    }
}