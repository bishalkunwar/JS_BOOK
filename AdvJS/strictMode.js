// // Strict Mode was a new feature in ECMA Script 5 that allows us to place a program or a function in a "strict" operating context.
// // Strict context prevents certain actions from being taken and throws more exception.

// // Benefits or using "Strict" :=>
// // -- Strict mode eliminates some javascript silent errors by changing them to throw errors.
// // -- strict mode fixes mistakes that make it difficult for javascript engine to perform optimizations: strict mode code can sometime be made to run faster than identical code that is not strict mode.
// // -- strict mode prohibits some syntax likely to be defined in future version of ECMAScript.
// // -- It Prevents or throws errors when relatively some unsafe actions are taken such as gaining access to global object.
// // --it disables features that are confusing or poorly thought out
// // -- Strict mode makes it easier to write "Secure" JS.

// // use strict mode either for gloabl context or for functions but not for the block statements.

// 'use strict';
// x =3.34;

// Objects are variables too.
// Using an object, without declaring it, is not allowed:
'use strict';
 
  // Will throw an error
  x = {p1:10, p2:20};