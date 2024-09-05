const fs = require('fs');

fs.readFile('employeeData.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const employees = data.trim().split('\n').map(line => JSON.parse(line));
    console.log('Employee Data:', employees);
});
