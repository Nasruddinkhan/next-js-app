import { useRouter } from "next/router";

function EmployeeById() {
 const router =   useRouter();
  let value =  router.query.employeeId;
  return <h1>Get Employee By Id {value}</h1>;
}

export default EmployeeById;
