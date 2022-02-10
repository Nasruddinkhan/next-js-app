import { MongoClient } from "mongodb";
async function handler(req, res) {
    console.log(req);
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb://localhost:27018/employees-db");
    const db = client.db();

    const employeeCollection = db.collection("employees");

    const result = await employeeCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;