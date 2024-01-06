const employee =  {
    name: "sam",
    streetAdress: 1
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmpl =  {...employee};
    newEmpl[key] = value;

    return newEmpl;

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeClone = {...employee};
    delete employeeClone.name;
    

    return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey (employee, key, value){
   delete employee[key] ;

    return employee;
}