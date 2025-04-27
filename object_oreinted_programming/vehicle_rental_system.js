class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.status = "available";
    }

    rent(){
        if (this.status == "available"){
            this.status = "unavailable";
            console.log("Successfully this vehicle is rented");
        }else{
            console.log("This vehicle is unavailable, you cannot rent.");
        }
    }

    returnVehicle(){
        if (this.status == "unavailable"){
            this.status = "available";
            console.log("Successfully this vehicle is returned");
        }else{
            console.log("This vehicle is available, you can not return.");
        }
    }

    set model(newModel){

        if (newModel.trim() === ""){
            console.log("Model name cannot be empty");
        }else{
            this._model = newModel;
            console.log("successfully model name has been updated.")
        }
    }

    get model(){
        return this._model;
    }

}

class Car extends Vehicle{
    
    constructor(brand, model){
        super(brand, model);
    }

    get summary(){
        return `${this.brand} ${this.model} is currently ${this.status}`;
    }

}

class Bike extends Vehicle{

    constructor(brand, model){
        super(brand, model);
    }

    get summary(){
        return `${this.brand} ${this.model} is currently ${this.status}`;
    }   
}

const car1 = new Car('Hyundai', 'santafe');
console.log(car1.summary);
car1.rent();
car1.rent();
console.log(car1.summary);
car1.returnVehicle();
console.log(car1.summary);
