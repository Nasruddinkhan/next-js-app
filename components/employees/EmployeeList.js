import Employee from "./Employee";
import classes from "./EmployeeList.module.css";

function EmployeeList(props) {
  return (
    <ul className={classes.list}>
      {props.employees.map((emp) => (
        <Employee
          key={emp.id}
          id={emp.id}
          image={emp.image}
          title={emp.title}
          address={emp.address}
        />
      ))}
    </ul>
  );
}

export default EmployeeList;
