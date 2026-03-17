// Assignment 2


// 1
const path = require("path");

function getInfo() {
  console.log({
    File: __filename,
    Dir: __dirname
  });
}

getInfo();

// 2
const path = require("path");

function getFileName(filePath) {
  return path.basename(filePath);
}

console.log(getFileName("/user/files/report.pdf"));

// 3
const path = require("path");

function buildPath(obj) {
  return path.join(obj.dir, obj.name + obj.ext);
}

console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
// 4
const path = require("path");

function getExt(filePath) {
  return path.extname(filePath);
}

console.log(getExt("/docs/readme.md"));

// 5
const path = require("path");

function parsePath(filePath) {
  const parsed = path.parse(filePath);
  return {
    Name: parsed.name,
    Ext: parsed.ext
  };
}

console.log(parsePath("/home/app/main.js"));

// 6
const path = require("path");

function isAbsolutePath(p) {
  return path.isAbsolute(p);
}

console.log(isAbsolutePath("/home/user/file.txt"));

// 7
const path = require("path");

function joinSegments(...segments) {
  return path.join(...segments);
}

console.log(joinSegments("src","components","App.js"));
// 8
const path = require("path");

function resolvePath(p) {
  return path.resolve(p);
}

console.log(resolvePath("./index.js"));
// 9
const path = require("path");

function joinTwo(p1, p2) {
  return path.join(p1, p2);
}

console.log(joinTwo("/folder1", "folder2/file.txt"));

// 10
const fs = require("fs");

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) return console.log("Error");
    console.log("The file.txt is deleted.");
  });
}

deleteFile("/path/to/file.txt");

// deleteFile("/path/to/file.txt");

// 11
const fs = require("fs");

function createFolder(name) {
  fs.mkdirSync(name);
  console.log("Success");
}

createFolder("newFolder");


// 12
const EventEmitter = require("events");

const emitter1 = new EventEmitter();

emitter1.on("start", () => {
  console.log("Welcome event triggered!");
});

emitter1.emit("start");

// 13
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});

emitter.emit("login", "Ahmed");

// 14
const fs = require("fs");

function readFile(pathFile) {
  const data = fs.readFileSync(pathFile, "utf8");
  console.log("the file content =>", data);
}

readFile("./notes.txt");


// 15
const fs = require("fs");

function writeAsync(pathFile, content) {
  fs.writeFile(pathFile, content, (err) => {
    if (err) return console.log("Error");
    console.log("Done");
  });
}

writeAsync("./async.txt", "Async save");


// 16
const fs = require("fs");

function checkExists(p) {
  return fs.existsSync(p);
}

console.log(checkExists("./notes.txt"));

// 17
const os = require("os");

function getOSInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}

console.log(getOSInfo());