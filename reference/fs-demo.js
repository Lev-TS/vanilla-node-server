const fs = require("fs");
const path = require("path");

// Most of these methods ar sync, but async methods also exist  
// for each just remove Sync from the first line, e.g. fs.mkdir() 
// instead of fs.mkdirSync().

// Create folder
fs.mkdirSync(
	path.join(__dirname, "/test"), 
	{}, 
	(err) => {
		if (err) throw err;
		console.log("Folder created");
	}
);

// Create and write to file
fs.writeFileSync(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
  }
);

// File append
fs.appendFileSync(
  path.join(__dirname, "/test", "hello.txt"),
  " I love Node.js",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
  }
);

// Read file
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hello-world.txt"),
  (err) => {
    if (err) throw err;
    console.log(`File renamed...`);
  }
);
