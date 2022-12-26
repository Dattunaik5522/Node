const addLogic = require("./add.js"); //we can import any files which we wanna run

/**
 * In Node.js , each file in a module that is Isolated by default
 * To load a module into another file, we use the ''require'' function
 * when index.js is executed , the code in the moodule is also executed
 * If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer on our behalf
 */

console.log("Hello from index.js");
console.log(addLogic(003, 297));
