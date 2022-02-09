import { useRouter } from "next/router";
import EmployeeDetail from "../../components/employees/EmployeeDetail";

function EmployeeDetails() {
  const router = useRouter();
  //let value = router.query.employeeId;
    return (
      <EmployeeDetail
        image="https://images.unsplash.com/photo-1579256945823-f007794790df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup"
      />
    );
}
export async function getStaticPaths(){
    return {
    fallback: false,
      paths: [
        {
          params: {
            employeeId: "e1",
          },
        },
        {
          params: {
            employeeId: "e2",
          },
        }
      ],
    };

}
export async function getStaticProps(context) {
  // fetch data from an API
  const employeeId = context.params.employeeId;
  console.log(  employeeId);
  return {
    props: {
      employeeData: {
        id: employeeId,
        image:
          "https://images.unsplash.com/photo-1579256945823-f007794790df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default EmployeeDetails;


