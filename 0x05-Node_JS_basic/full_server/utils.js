import fs from "fs";

const readDatabase = (dataPath) =>
  new Promise((resolve, reject) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) reject(Error("Cannot load the database"));
      else {
        const hashtable = {};
        const lines = data.split("\n");
        let students = -1;
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
        resolve(hashtable);
      }
    });
  });

export default readDatabase;
module.exports = readDatabase;
