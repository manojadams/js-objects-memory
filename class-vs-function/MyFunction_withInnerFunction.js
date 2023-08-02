// Create a basic function with name MyFunction
function MyFunction_withInnerFunction(arg) {
    this.value = arg;
    function method1() {
        console.log("lorem ipsum demo1");
    }
    function method2() {
         console.log("very verdifferent lorem");
    }
}

// Create 1 million objects using MyFunction and store in myFunctionObjects array
const TOTAL_OBJECTS = 10_00_000;  // 1 million objects
const myFunctionObjects = [];

for(let i = 0; i < TOTAL_OBJECTS; i++) {
    myFunctionObjects.push(new MyFunction_withInnerFunction(i));
}

// Verify that all objects are created properly 
if (myFunctionObjects.length !== TOTAL_OBJECTS) {
    throw Error("MyFunction objects are not created properly");
}
