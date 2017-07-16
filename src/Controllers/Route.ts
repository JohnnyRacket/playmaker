import { Coordinate } from './Coordinate';

export class Route{

    private readonly points: Coordinate[];
    public readonly numPoints: number = SVGPointList.length;
    //want to add a length value as well

    public constructor(path: Coordinate[]){
        this.points = path;
    }

    public getPoint(index: number): Coordinate{
        return this.points[index];
    }
}