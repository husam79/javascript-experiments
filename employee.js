let employees = [];

export function addEmployee(first, last,salary){
    employees.push({first,last,salary});
}

export function getAllEmployees(){
    return employees;
}