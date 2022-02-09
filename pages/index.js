import EmployeeList from "../components/employees/EmployeeList";

const DUMMY_MEETUPS = [
  {
    id: "e1",
    title: "A First Employee",
    image:
      "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_960_720.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "e2",
    title: "A Second Employee",
    image:
      "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_960_720.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

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
  return {
    props: {
      employees: DUMMY_MEETUPS,
    },
    revalidate: 1
  };
}
export default HomePage;
