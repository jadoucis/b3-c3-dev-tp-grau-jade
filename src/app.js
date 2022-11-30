class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    
    getPerimeter () {
        return (this.A + this.B + this.C);
    }
    
    getTriangleRectangle () {
        let pythagore = Math.sqrt((this.A)**2 + (this.B)**2);
        if(Math.round(pythagore) == this.C){
            return ("Rectangle");
        }else{
            return("Not Rectangle");
        }
            
    }
    
    getArea () {
        return (Math.round((this.A * this.C)/2));
    }

    getEquilateral () {
        if(this.A == this.B || this.B == this.C){
            return ("Equilateral");
        }else{
            return("Not Equilateral")
        }
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}