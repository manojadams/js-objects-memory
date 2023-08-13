# A Performance comparison of functions

A performance comparison between function definition, function expression and arrow function.

## Steps
- Clone the repo and cd into folder `function-definition_vs_function-expression_vs_arrow-function`
- Run command `node index.js` while will generate the following files
  - withFunctionDefinition.js
  - withFunctionExpression.js
  - withArrowDefinition.js
- To measure performance with traditional function definition, run command
```bash
node withFunctionDefinition.js
```

- To measure performance with function expression, run command
```bash
node withFunctionExpression.js
```

- To measure performance with arrow functions, run command
```bash
node withArrowDefinition.js
```

### 1. withFunctionDefinition.js
This file contains 1 million function definitions created with javascript traditionally like below:
```javascript
function myFunction() {
  console.log("this is my function");
}
```

### 2. withFunctionExpression.js
This file contains 1 million function definitions created using function expression like below:
```javascript
const myFunction = function() {
}
```

### 3. withArrowDefinition.js
This file contains 1 million function definitions created with arrow functions like:
```javascript
const myFunction = () => console.log("Hi, I am created using arrow functions");
```


## Results
Function created traditionally using step 1 has the best performance.
