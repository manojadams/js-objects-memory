// Create a basic class with name MyClass
class MyClass {
    constructor(arg) {
        this.value = arg;
    }
    method1() {
        console.log("lorem ipsum demo1");
    }
    method2() {
        console.log("very different lorem");
    }
}

// Create 1 million objects using MyClass and store in myClassObjects array
const myClassObjects = [];
const TOTAL_OBJECTS = 10_00_000;
for(let i = 0; i < TOTAL_OBJECTS; i++) {
    myClassObjects.push(new MyClass(i));
}

// Verify that all objects are created properly 
if (myClassObjects.length !== TOTAL_OBJECTS) {
    throw Error("MyClass objects are not created properly");
}
