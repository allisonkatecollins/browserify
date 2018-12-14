/*
    Author: your name here
    Name: createCar.js
    Purpose: Produces a new car object
*/
const createCar = function(make,model) {
    return {
    
    //shorthand below: key and value are the same; works like make:make
    // key - word "make"; value - the argument/the value contained in the variable
      make,
      model,
    
      toString () {
          return `a ${this.make} ${this.model}`
      },
    
      drive (destination) {
          return `You drive ${this} to ${destination}`
      }
    }
  }

export default createCar;