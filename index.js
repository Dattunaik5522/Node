const addLogic = require("./add.js"); //we can import any files which we wanna run

/**
 * In Node.js , each file in a module that is Isolated by default
 * To load a module into another file, we use the ''require'' function
 * when index.js is executed , the code in the moodule is also executed
 * If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer on our behalf
 */

console.log("Hello from index.js");
console.log(addLogic.add(300, 297));
console.log(addLogic.add(003, 297));
console.log(addLogic.subtract(003, 297));
console.log(addLogic.subtract(300, 297));
/**
 * Each loaded moddule in Node.js is wrapped with an IIFE that provides private scoping of code
 * IIFE allows you to  repeat variable function names without any conflicts.
 * MODULE WRAPPER
 * --Every module in node.js gets wrapped in an IIFE before being loaded
 * --IIFE helps keep top-level variables scoped to the module rather than the global object
 * The IIFE that wraps every module contains 5 paramerters which are pretty important for the function module.
 */
