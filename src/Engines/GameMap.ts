import { MapObject } from '../GameObjects/MapObject';
import { PositionableGameObject } from '../GameObjects/PositionableGameObject';
import { Coordinate } from "../Controllers/Coordinate";

export class GameMap {

    private static _instance: GameMap = new GameMap();
    //private objects: [string, Coordinate];
    private objects: MapObject[] = [];
  
    private constructor() {
        if(GameMap._instance){
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        GameMap._instance = this;
    }
 
    public static getInstance(): GameMap
    {
        return GameMap._instance;
    }

    public printPositions(){
        console.log("logging all map elements..");
        this.objects.forEach(element => {
            console.log(element.type,element.object.x,element.object.y);
        });
    }

    public addMapObject(object: PositionableGameObject, type: string){
        this.objects.push(new MapObject(object,type));
    }

    public getAllOfType(type: string){//need to test this
        let result = this.objects.map( object => {
            if(object.type == type) return object;
        })
    }

}