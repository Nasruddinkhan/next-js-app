import EmployeeList from "../components/employees/EmployeeList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return <EmployeeList employees={props.employees} />;
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb://localhost:27018/employees-db"
  );
  const db = client.db();
  const employeesCollection = db.collection("employees");

  const employees = await employeesCollection.find().toArray();

  client.close();
  return {
    props: {
      employees: employees.map((emp) => ({
        title: emp.title,
        address: emp.address,
        image: emp.image,
        id: emp._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
