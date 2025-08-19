import { writeFileSync, readFileSync, appendFileSync, unlinkSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory of the module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the file path
const filePath = path.join(__dirname, 'textFile.txt');

writeFileSync(filePath, 'File created!'); // Creates a file and writes content to it
console.log('File created and content written.');

//Read the content of the file
const content = readFileSync(filePath, 'utf-8');
console.log('File content:', content); // Outputs: Hello, World!

// Append content to the file
appendFileSync(filePath, '\nAppended text.');
console.log('Content appended to the file.');

// Read the updated content of the file
const updatedContent = readFileSync(filePath, 'utf-8');
console.log('Updated file content:', updatedContent); // Outputs: Hello, World!\nAppended text.

// Delete the file
// unlinkSync(filePath);?
// console.log('File deleted.'); // Confirms that the file has been deleted