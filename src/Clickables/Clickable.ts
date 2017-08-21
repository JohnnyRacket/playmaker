import { Dimensionable } from '../Shared/Dimensionable';
export abstract class Clickable extends Dimensionable{
    
    public abstract click();
    //perhaps make a hoverable subclass

}