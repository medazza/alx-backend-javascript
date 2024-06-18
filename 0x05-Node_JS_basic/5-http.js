const http = require("http");
const fs = require("fs").promises;

const PORT = 1245;
const HOST = "localhost";
const DB_FILE = process.argv.length > 2 ? process.argv[2] : "";

function countStudents(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, "utf8")
      .then((data) => {
        const lines = data.split("\n");
        const hashtable = {};
        let students = -1;
        let result = "";
        for (const line of lines) {
          if (line.trim() !== "") {
            const studentRecord = line.split(",");
            const field = studentRecord[studentRecord.length - 1];
            const firstname = studentRecord[0];
            if (students >= 0) {
              if (!Object.hasOwnProperty.call(hashtable, field)) {
                hashtable[field] = [];
              }
              hashtable[field] = [...hashtable[field], firstname];
            }
            students += 1;
          }
        }
        result += `Number of students: ${students}\n`;
        for (const key in hashtable) {
          if (Object.hasOwnProperty.call(hashtable, key)) {
            result += `Number of students in ${key}: ${
              hashtable[key].length
            }. List: ${hashtable[key].join(", ")}\n`;
          }
        }
        resolve(result);
      })
      .catch(() => {
        reject(new Error("Cannot load the database"));
      });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    countStudents(DB_FILE)
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404);
    res.end("Not foundx");
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
