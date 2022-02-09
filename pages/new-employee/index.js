import NewEmployeeForm from "../../components/employees/NewEmployeeForm";

function NewEmployeePage() {
  function addEmployeeHandler(enteredEmployeeData) {
    console.log(enteredEmployeeData);
  }

  return <NewEmployeeForm onAddEmployee={addEmployeeHandler} />;
}

export default NewEmployeePage;
