class wepon{
    constructor(damage:number, durability:number,name:string){
        this.damage = damage
        this.durability = durability
        this.name = name
        console.log('new wepon created')
    }

    public damage: number = 1
    public durability: number = 100
    public name: string = 'defaultwepon'

    public getDamage(){
        return this.damage
    }
    public getDurability(){
        return this.durability
    }
    public getName(){
        return this.name
    }
    public setDamage(value: number){
        return this.damage = value
    }
    public setDurability(value: number){
        return this.durability = value
    }
    public setName(value: string){
        return this.name = value
    }
} 

class axe extends wepon{
    constructor(){
        super(10,150,'boska_siekiera')
        console.log('axe created')
    }
    public pasive: string = 'holy'


    public getPasive(){
        return this.pasive
    }

    
}

let axe1 = new axe()

console.log(axe1.getDamage())