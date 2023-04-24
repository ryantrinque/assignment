const companyData = require('./companydata');

function searchByDepartment(query) {
  // Search for department by department number or name and return employees in that department
}

function searchByEmployee(query) {
  // Search for employee by employee number, name, or department and return information about that employee
}

function generateDepartmentReport(department) {
  // Generate a report of all employees in a department, including their employee number, name, and salary
}

function generateDepartmentSummaryReport() {
  // Generate a report of all departments, including the department number, name, and number of employees in each department
}

module.exports = {
  searchByDepartment,
  searchByEmployee,
  generateDepartmentReport,
  generateDepartmentSummaryReport,
};
