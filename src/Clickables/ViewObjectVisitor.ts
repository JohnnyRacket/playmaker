import { DoubleBufferedViewObject } from '../ViewObjects/DoubleBufferedViewObject';
import { IViewObject } from '../ViewObjects/ViewObject.interface';
export interface ViewObjectVisitor{

    visitPlayerObject(subject: DoubleBufferedViewObject);
    visitFieldObject(subject: DoubleBufferedViewObject);

}