const fs = require('fs');

/**
 * Create all files for performance testing
 * @param {*} num 
 */
function createAllFiles(num) {
    const actualNum = num ?? 10_000;
    addFunctionExpressionFile(actualNum);
    addFunctionFile(actualNum);
    addArrowFunctionFile(actualNum);
}

/**
 * Create file with function expressions
 * @param {*} num 
 */
function addFunctionExpressionFile(num) {
    const fileName = 'withFunctionExpression.js';
    fs.appendFileSync(fileName, 'const start = performance.now();')
    for (let i = 0; i < num; i++){
        const content = `const f${i} = function(){console.log(f${i}.name)}\n`;
        fs.appendFileSync(fileName, content);
    }
    fs.appendFileSync(fileName, 'const end = performance.now();')
    fs.appendFileSync(fileName, 'console.log(end - start)');
}

/**
 * Create file with function definitions
 * @param {*} num 
 */
function addFunctionFile(num) {
    const fileName = 'withFunctionDefinition.js';
    fs.appendFileSync(fileName, 'const start = performance.now();')
    for (let i = 0; i < num; i++){
        const content = `function f${i}(){console.log(f${i}.name)}\n`;
        fs.appendFileSync(fileName, content);
    }
    fs.appendFileSync(fileName, 'const end = performance.now();')
    fs.appendFileSync(fileName, 'console.log(end - start)');
}

/**
 * Create file with arrow functions
 * @param {*} num 
 */
function addArrowFunctionFile(num) {
    const fileName = 'withArrowDefinition.js';
    fs.appendFileSync(fileName, 'const start = performance.now();')
    for (let i = 0; i < num; i++){
        const content = `const f${i} = () => {console.log(f${i}.name)}\n`;
        fs.appendFileSync(fileName, content);
    }
    fs.appendFileSync(fileName, 'const end = performance.now();')
    fs.appendFileSync(fileName, 'console.log(end - start)');
}

module.exports = createAllFiles;
