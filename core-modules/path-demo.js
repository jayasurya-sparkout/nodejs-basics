import path from "path";
import { fileURLToPath } from "url";

// __dirname alternative for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("📂 Current file path:", __filename);
console.log("📁 Current directory:", __dirname);

// 1. join() → Safely joins paths
const filePath = path.join(__dirname, "example", "test.txt");
console.log("➡️ join():", filePath);

// 2. resolve() → Returns absolute path
const absPath = path.resolve("example", "test.txt");
console.log("➡️ resolve():", absPath);

// 3. basename() → Get filename from path
console.log("➡️ basename():", path.basename(filePath)); // test.txt

// 4. dirname() → Get directory name
console.log("➡️ dirname():", path.dirname(filePath)); 

// 5. extname() → Get file extension
console.log("➡️ extname():", path.extname(filePath)); // .txt

// 6. parse() → Break path into object
console.log("➡️ parse():", path.parse(filePath));

// 7. format() → Opposite of parse
const parsed = path.parse(filePath);
console.log("➡️ format():", path.format(parsed));
