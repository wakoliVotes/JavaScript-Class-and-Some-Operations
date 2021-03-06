
// In this illustration, we use JavaScript class for completing specific methods
// The class below is called TheSum
// The use of class here is very beneficial, allowing for code reuse
// Other concepts applied include 'this' method, and JavaScript literals
class TheSum {
    constructor(height, length, width){                 // arguments are passed here as height, length and width
        this.height = height;
        this.length = length;
        this.width = width;        
    }
    getVolume(){
        return console.log('The Volume is: ' + this.length * this.width * this.height);
    }
    getArea(){
        return console.log('The Area is: ' + this.length * this.width);
    }
    getPerimeter(){
        return console.log('The Perimeter is: ' + 2 * (this.height + this.length));
    }
    getDescription (){
        console.log(`This Shape has Length of ${this.length} with Width of ${this.width} and a Height of ${this.height}`);   // Use of template literals
    }
}
const Values = new TheSum(100,10,12,12,334);        // Creating an object called Values using the 'new' keyword
Values.getVolume();
Values.getArea();
Values.getPerimeter();
Values.getDescription();


// RESULTS
/*
The Volume is: 12000
The Area is: 120
The Perimeter is: 220
This Shape has Length of 10 with Width of 12 and a Height of 100

*/