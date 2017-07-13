import { Hitbox } from './Hitbox';

export class ActiveHitbox extends Hitbox{
    public collide(hitbox: Hitbox){
        this.subject.collide(hitbox.subject);
    }
}