import EmployeeDetail from "../../components/employees/EmployeeDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function EmployeeDetails(props) {
  // const router = useRouter();
  //let value = router.query.employeeId;
    return (
      <Fragment>
        <Head>
          <title>{props.empData.title}</title>
          <meta name="description" content={props.empData.description} />
        </Head>
        <EmployeeDetail
          image={props.empData.image}
          title={props.empData.title}
          address={props.empData.address}
          description={props.empData.description}
        />
      </Fragment>
    );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27018/employees-db"
  );
  const db = client.db();

  const employeesCollection = db.collection("employees");

  const employees = await employeesCollection.find({}, { _id: 1 }).toArray();
  console.log(employees);
  client.close();

  return {
    fallback: false,
    paths: employees.map((emp) => ({
      params: { employeeId: emp._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const employeeId = context.params.employeeId;
  console.log("employeeId", employeeId);
  const client = await MongoClient.connect(
    "mongodb://localhost:27018/employees-db"
  );
  const db = client.db();

  const employeesCollection = db.collection("employees");

  const selectedMeetup = await employeesCollection.findOne({
    _id: ObjectId(employeeId),
  });

  client.close();

  return {
    props: {
      empData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
export default EmployeeDetails;