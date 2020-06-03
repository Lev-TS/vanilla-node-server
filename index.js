const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // this is very inneficient way because for every file you need to have a seperate url
  /* if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
	}
	
	if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
	}

	// Rest API
	if (req.url === "/api/users") {
		const users = [
			{name: 'Bob Smith', age: 40},
			{name: 'John Doe', age: 30}
		];
		res.writeHead(200, { "Content-Type": "application/json" })
		res.end(JSON.stringify(users));
	} */

  // more practical method step-by-step
  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Get extension of file
  let extname = path.extname(filePath);

  // Set initial content type
  let contentType = "text/html";

  // Check ext and then set content type
  switch (extname) {
    case ".js":
      contentType = "text/css";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
						res.writeHead(200, { "Content-Type": "text/html" });
						res.end(content, 'utf8')
					}
        );
      } else {
				// Some server error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
    } else {
			// Succss
			res.writeHead(200, { "Content-Type": contentType })
			res.end(content, 'utf8')
		}
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
