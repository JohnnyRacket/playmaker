import { Coordinate } from './Coordinate';

export class Route{

    public readonly points: Coordinate[] = [];

    public constructor(path: Coordinate[]){
        this.points = path;
    }
}