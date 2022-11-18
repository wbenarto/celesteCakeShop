import {client} from "../../lib/client";

export default async function sanity(req, res) {
  console.log('api/sanity')
  switch (req.method) {
    case "POST":
      //this JSON arrives as a string,
      //so we turn it into a JS object with JSON.parse()
      const newOrder = await JSON.parse(req.body);
      //then use the Sanity client to create a new todo doc
      console.log('API SANITY')
      console.log(client)
      console.log(req)
      try {
        await client
          .create({
            _type: "orders",
            customer: newOrder.customer,
            isCompleted: false,
            createdAt: new Date().toISOString(),
            email: newOrder.email,
            phone: newOrder.phone,
            pickupDate: newOrder.pickupDate,
            description: newOrder.description,
            imageUrl: newOrder.imageUrl,
          })
          .then((res) => {
            console.log(`Order was created, orderId ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Order was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}