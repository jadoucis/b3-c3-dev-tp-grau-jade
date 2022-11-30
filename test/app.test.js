const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. The perimeter of the Triangle', function(done) {
        let t1 = new Triangle(12, 25, 17);
        expect(t1.getPerimeter()).to.equal(54);
        done();
    });
    
    it('2. The Triangle is rectangle', function(done) {
        let t2 = new Triangle(6.1, 18, 19);
        expect(t2.getTriangleRectangle()).to.equal("Rectangle");
        done();
    });
    
    it('3. The area round for a Triangle rectangle on AB ', function(done) {
        let t3 = new Triangle(6.1, 18, 19);
        expect(t3.getTriangleRectangle()).to.equal("Rectangle");
        expect(t3.getArea()).to.equal(58);
        done();
    });
    it('4. The Triangle is equilateral', function(done) {
        let t4 = new Triangle(5, 5, 5);
        expect(t4.getEquilateral()).to.equal("Equilateral");
        done();
    });
    
});