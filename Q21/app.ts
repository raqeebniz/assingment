/*let car: {type:string, model:string, year: Number} = {
    type:"Toyota",
    model:"Crown",
    year: 2020,

};
console.log(car);*/




const car: { type: string, mileage?: number } = {
    type: "Toyota" 
  };
  
  car.mileage = 2000;
  
  console.log(car);