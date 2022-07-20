// Write your solution in this file!
/* const employee = {
    name : "Sarah",
    streetAddress : "123 Green St",
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const copyOfEmployee = { ...employee };
    copyOfEmployee[key] = value;
    return copyOfEmployee;
};

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
};
const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee2 = { ...employee };
    delete copyOfEmployee2[key];
    return copyOfEmployee2;
};

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
};
*/

const employee = {
    name: "Sarah",
    streetAddress: "242 Blue Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}; 
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}