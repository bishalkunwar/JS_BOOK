// JavaScript yield operator is used to delegate control of a generator function to another generator function or iterable object. It allows you to yield the values of an inner generator or iterable object from within an outer generator function. This operator is useful in a variety of scenarios, such as when working with iterators, asynchronously processing data, or implementing coroutines.
// Only the generator function it’s included in can call yield directly. Nested functions and callbacks are not permitted to invoke it.

// function* innerGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
  
// function* outerGenerator() {
//     yield* innerGenerator();
// }
  
// const generator = outerGenerator();
  
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


function* generator() {
    const value = yield 1;
    console.log(value);
}
  
const iter = generator();
  
iter.next();
iter.next('hello');


// Conclusion: The yield* operator can be useful for breaking up large generator functions into smaller, more manageable chunks, or for reusing generator functions in different contexts. It is an advanced feature of JavaScript generators, and is generally not used in beginner-level code.