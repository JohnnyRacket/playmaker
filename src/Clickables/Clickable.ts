import { Dimensionable } from '../Shared/Dimensionable';
export interface Clickable{
    //this is a view construct
    click();
    getGlobalX(): number;
    getGlobalY(): number;
    //perhaps make a hoverable subclass

}