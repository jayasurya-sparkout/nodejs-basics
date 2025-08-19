console.log('Hello, World!');

// This is a simple JavaScript program that prints "Hello, World!" to the console.

// Process:

console.log("Node Version:", process.version); // It prints the Node.js version
console.log("Platform:", process.platform); // It prints the platform on which Node.js is running
console.log("CWD:", process.cwd()); // It prints the current working directory
console.log("Memory Usage:", process.memoryUsage()); // It prints memory usage statistics
console.log("Uptime:", process.uptime()); // It prints the uptime of the Node.js process
console.log("Process ID:", process.pid); // It prints the process ID of the Node.js process
console.log("Node.js Executable Path:", process.execPath); // It prints the path to the Node.js executable
console.log("Environment Variables:", process.env.NODE_ENV); // It prints the environment variables available to the Node.js process -> To Run -- NODE_ENV=dev node basics/hello-world.js