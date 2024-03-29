const mail = require('@sendgrid/mail');

mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body)

  const image64 = body.imageFile.replace(`data:image/jpeg;base64,`, '')
  // const image64 = body.imageFile.split('base64')[1]
  const message = `
    <h3>Name: </h3> ${body.name}\r\n
    <h3>Email: </h3> ${body.email}\r\n
    <h3>Pick Up Date and Time : </h3> ${body.date}\r\n
    <h3>Order Description: </h3> ${body.description}\r\n
    <h3>Size: </h3> ${body.size}\r\n
    <h3>Base Flavor : </h3> ${body.baseFlavor}\r\n
    <h3>Fondant/Buttercream Flavor: </h3> ${body.outerFlavor}\r\n
    <h3>Fillings Flavor: </h3> ${body.fillingFlavor}\r\n

  `;

  try {
    await mail.send({
        to: [{
          "email": "w.benarto@gmail.com"
        },{
          "email": "celestecshop@gmail.com"
        }] ,
        from: 'webegitu@gmail.com',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
        attachments: [
          {
            filename: 'image.jpg',
            contentType: 'image/jpeg',
            content: image64,
            cid: 'myimagecid'
          }
        ]
      });
    res.status(200).json({ success: true });
    console.log('success')

  } catch(error) {
    console.log(error)
    console.log('error')
    res.status(200).json({ success: false });
  }


}