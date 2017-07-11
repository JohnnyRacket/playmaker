import {IViewObject} from './ViewObject.interface'

export class ViewObject implements IViewObject{
    public render(){
        console.log('render loop trigger');
    }
}