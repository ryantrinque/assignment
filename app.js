const fs = require('fs');

// Read departments.txt file
const departmentFile = fs.readFileSync('./departments.txt', 'utf-8');
const departmentLines = departmentFile.split('\n');
const departments = departmentLines.map(line => {
  const [departmentNumber, departmentName] = line.trim().split(',');
  return { departmentNumber, departmentName };
});

// Read employeedepartment.txt file
const empDeptFile = fs.readFileSync('./employeedepartment.txt', 'utf-8');
const empDeptLines = empDeptFile.split('\n');
const employeeDepartments = empDeptLines.map(line => {
  const [employeeNumber, departmentNumber, fromDate, toDate] = line.trim().split(',');
  return { employeeNumber, departmentNumber, fromDate, toDate };
});

// Read employees.txt file
const employeesFile = fs.readFileSync('./employees.txt', 'utf-8');
const employeesLines = employeesFile.split('\n');
const employees = employeesLines.map(line => {
  const [employeeNumber, birthDate, firstName, lastName, sex, hireDate] = line.trim().split(',');
  return { employeeNumber, birthDate, firstName, lastName, sex, hireDate };
});

// Read employeesalaries.txt file
const empSalariesFile = fs.readFileSync('./employeesalaries.txt', 'utf-8');
const empSalariesLines = empSalariesFile.split('\n');
const employeeSalaries = empSalariesLines.map(line => {
  const [employeeNumber, salary, fromDate, toDate] = line.trim().split(',');
  return { employeeNumber, salary, fromDate, toDate };
});

// Combine all data into a single object
const companyData = {
  departments,
  employeeDepartments,
  employees,
  employeeSalaries
};

// Write companydata.js file
fs.writeFileSync('./companydata.js', `export default ${JSON.stringify(companyData, null, 2)};`);
