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

### Steps

To start with, we created 1 million JavaScript Objects using class definition and 1 million JavaScript Objects using function definition.

We compared both and the result is surprising.

#### Objects created using class definition
![MyClass](https://github.com/manojadams/js-objects-memory/assets/1009561/6f15aea4-aa53-4d3b-a9d9-3923382409ff)

#### Objects created using function definition
![MyFunction](https://github.com/manojadams/js-objects-memory/assets/1009561/25db6b1e-7550-4174-95dd-7ee85da099dc)

#### Objects created using function definition
![MyFunction_withInnerFunction](https://github.com/manojadams/js-objects-memory/assets/1009561/96a7501e-f1c9-4c81-8750-cfe66f943f23)




