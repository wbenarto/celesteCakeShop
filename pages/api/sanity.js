import {client} from "../../lib/client";
import {basename} from 'path'
import {createReadStream} from 'fs'


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
        await client.assets.upload('image', createReadStream(newOrder.imageFile), {
          filename: basename(imageFile)
        })
        .then(imageAsset => {
          return client.patch('some-doc-id')
          .set({
            theImageField: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageAsset._id
              }
            }
          }).commit()
        })
        .then(()=>console.log("done!"))
      } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "Check console for error message"})
      }
      try {
        await client
          .create({
            _type: "orders",
            customer: newOrder.customer,
            createdAt: new Date().toISOString(),
            email: newOrder.email,
            phone: Number(newOrder.phone),
            pickupDate: newOrder.pickupDate,
            description: newOrder.description,
            size: newOrder.size,
            baseFlavor: newOrder.baseFlavor,
            outerFlavor: newOrder.outerFlavor,
            fillingFlavor: newOrder.fillingFlavor,
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