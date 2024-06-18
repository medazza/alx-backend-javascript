const fs = require('fs').promises;

function countStudents(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const hashtable = {};
        let totalStudents = -1;
        for (const line of lines) {
          if (line.trim() !== '') {
            const studentRecord = line.split(',');
            const field = studentRecord[studentRecord.length - 1];
            const firstname = studentRecord[0];
            if (totalStudents >= 0) {
              if (!Object.hasOwnProperty.call(hashtable, field)) {
                hashtable[field] = [];
              }
              hashtable[field] = [...hashtable[field], firstname];
            }
            totalStudents += 1;
          }
        }
        console.log(`Number of students: ${totalStudents}`);
        for (const key in hashtable) {
          if (Object.hasOwnProperty.call(hashtable, key)) {
            console.log(
              `Number of students in ${key}: ${
                hashtable[key].length
              }. List: ${hashtable[key].join(', ')}`
            );
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
