class Vechicle {
    constructor(numberOfWheels: Number) {
        this.numberOfWheels = numberOfWheels
        console.log(`new vehicle created`)
    }

    private numberOfWheels: Number = 0
    private speed: String = `50km/h`

    public getSpeed() {
        return this.speed
    }

    public getNumberOfWheels(){
        return this.numberOfWheels
    }

    public setNumberOfWheels(value: number){
        return this.numberOfWheels = value
    }
}

class Car extends Vechicle{
    constructor(){
        super(4)
    }

    public EngineName: String = ''
    public setEngineName(NewEngineName: String){
        this.EngineName = NewEngineName
    }

}

let vehicleNumber1 = new Vechicle(2)

console.log(vehicleNumber1.getSpeed())
console.log(vehicleNumber1.getNumberOfWheels())
vehicleNumber1.setNumberOfWheels(4)
console.log(vehicleNumber1.getNumberOfWheels())

let newCar = new Car()

console.log(newCar.getNumberOfWheels())