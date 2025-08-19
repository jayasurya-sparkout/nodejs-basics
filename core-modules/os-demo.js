import os from "os";

// 1. OS Platform
console.log("➡️ Platform:", os.platform()); // darwin, win32, linux

// 2. OS Type
console.log("➡️ Type:", os.type()); // Linux, Darwin (Mac), Windows_NT

// 3. OS Release (Version)
console.log("➡️ Release:", os.release());

// 4. Hostname
console.log("➡️ Hostname:", os.hostname());

// 5. Architecture
console.log("➡️ Arch:", os.arch()); // x64, arm

// 6. CPU Info
console.log("➡️ CPU Info:", os.cpus());

// 7. Free Memory
console.log("➡️ Free Memory:", os.freemem() / 1024 / 1024, "MB");

// 8. Total Memory
console.log("➡️ Total Memory:", os.totalmem() / 1024 / 1024, "MB");

// 9. Uptime (seconds since system booted)
console.log("➡️ Uptime:", os.uptime(), "seconds");

// 10. Home Directory
console.log("➡️ Home Dir:", os.homedir());

// 11. Temp Directory
console.log("➡️ Temp Dir:", os.tmpdir());

// 12. Network Interfaces
console.log("➡️ Network Interfaces:", os.networkInterfaces());
