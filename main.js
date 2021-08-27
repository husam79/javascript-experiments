import {addEmployee,getAllEmployees} from './employee.js';
import {SimpleGrid} from "./simple-grid.js";

let btnAddEmployee = document.getElementById("btnAddEmployee");
let btnGetAllEmployees = document.getElementById("btnGetAllEmployees");

btnAddEmployee.addEventListener("click", ()=>{
    let first =  document.getElementById("firstName").value;
    let last =  document.getElementById("lastName").value;
    let salary =  document.getElementById("salary").value;

    addEmployee(first,last,salary);

}, false);

btnGetAllEmployees.addEventListener("click", ()=>{
    /*let first =  document.getElementById("firstName");
    let last =  document.getElementById("lastName");
    let salary =  document.getElementById("salary");*/

    let tmp = getAllEmployees();

    console.log(tmp);
}, false);


let destDiv = document.getElementById("destDiv");

let grid = new SimpleGrid({first:"", last:"", age:0},destDiv);

grid.setDataset([{first:"husam", last:"burhan", age:41},
    {first:"usama", last:"burhan", age:41},
    {first:"nur", last:"burhan", age:41},
    //{hello:"asfdasfd"}
]);
