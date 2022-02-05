import Link from "next/link";
import { Fragment } from "react";


function EmployeeDetails(){
    return (
      <Fragment>
        <h1>The Employee Pages</h1>
        <ul>
          <li>
            <Link href="/component/employee/passingid">Get Employee</Link>
          </li>
          <li>Something Else</li>
        </ul>
      </Fragment>
    );
}

export default EmployeeDetails;