import NewEmployeeForm from "../../components/employees/NewEmployeeForm";
import { useRouter } from "next/router";

function NewEmployeePage() {
    const router = useRouter();

 async function addEmployeeHandler(enteredEmployeeData) {
   console.log(enteredEmployeeData);
   const response = await fetch("/api/new-employee", {
     method: "POST",
     body: JSON.stringify(enteredEmployeeData),
     headers: {
       "Content-Type": "application/json",
     },
   });

   const data = await response.json();

   console.log(data);
   router.push("/");
 }

  return <NewEmployeeForm onAddEmployee={addEmployeeHandler} />;
}

export default NewEmployeePage;
