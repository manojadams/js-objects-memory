// Create a basic function with name MyFunction
function MyFunction(arg) {
    this.value = arg;
    this.method1 = function() {
        console.log("lorem ipsum demo1");
    }
    this.method2 = function() {
         console.log("very verdifferent lorem");
    }
}

// Create 1 million objects using MyFunction and store in myFunctionObjects array
const TOTAL_OBJECTS = 10_00_000;  // 1 million objects
const myFunctionObjects = [];

for(let i = 0; i < TOTAL_OBJECTS; i++) {
    myFunctionObjects.push(new MyFunction(i));
}

// Verify that all objects are created properly 
if (myFunctionObjects.length !== TOTAL_OBJECTS) {
    throw Error("MyFunction objects are not created properly");
}


