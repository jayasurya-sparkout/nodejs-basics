const args = process.argv.slice(2); // Node provides an array called process.argv

// argv = argument vector --> list of command line arguments
// process.argv.slice(2) --> The first two elements are reserved for Node.js executable path and script path, so we slice the array to get only the arguments passed by the user.

// This code snippet demonstrates how to access command line arguments in a Node.js application.
console.log("Command Line Arguments:", args); // It prints the command line arguments passed to the script

// Example usage: node basics/args.js arg1 arg2
// This will output: Command Line Arguments: [ 'arg1', 'arg2' ]