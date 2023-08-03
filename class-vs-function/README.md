## Class vs Function objects - A memory comparison

<p align="center">
  <img 
    src="https://github.com/manojadams/js-objects-memory/assets/1009561/c9192951-3c82-4260-96f0-71fb3e5e1092" 
    alt="class-vs-function" 
    width="520"
  />
</p>

### Introduction

It is a common practise for JavaScript developers to use function definition to create Objects rather than class definition.

And it may seem that the objects created through both the ways should be similar in size, but are they really similar or one way is more memory efficient than the other?
Lets find out.

### Terminology

- **Shallow size** - size of memory held by object itself
- **Retained size** - size of memory held by object and memory of its references (not memory held by referenced objects but the references itself).

For details, you can check here: https://developer.chrome.com/docs/devtools/memory-problems/memory-101
  
### Steps

To start with, we created 1 million JavaScript Objects using class definition and 1 million JavaScript Objects using function definition.

We compared both and the result is surprising.

### Objects created using class definition
<p align="center">
  <img 
    src="https://github.com/manojadams/js-objects-memory/assets/1009561/276d0d46-1b02-42e1-8897-d350a47694cd"
    alt="Class Objects memory"
    width="720"
  />
</p>

### Objects created using function definition
<p align="center">
  <img 
    src="https://github.com/manojadams/js-objects-memory/assets/1009561/b3f7dabc-eb36-42a7-806c-f8f6eb24ffcc"  
    alt="function objects memory"
    width="720"
  />
</p>

### Objects created using function definition (with inner functions)
<p align="center">
  <img 
    src="https://github.com/manojadams/js-objects-memory/assets/1009561/6de7de23-a6b3-4065-a2b7-93aee08d5277"
    alt="function with inner functions objects memory"
    width="720"
  />
</p>

## Overall results
- The _retained size_** of objects created with function is very high.

| Name | Detail |
|------|--------|
| Objects created with class |  **16 * 10^<sup>6</sup> Bytes**|
| Objects created with function | **24 * 10^<sup>6</sup> Bytes**|
| Objects created with nested function | **16 * 10^<sup>6</sup> Bytes**|

### **Terminology

- Shallow size - size of memory held by object itself
- Retained size - size of memory held by object and memory of its references (not memory held by referenced objects but the references itself).




