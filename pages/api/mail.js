const mail = require('@sendgrid/mail');

mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body)

  // const image64 = body.imageFile.replace(`data:image/jpeg;base64,`, '')
  const image64 = body.imageFile.split('base64')[1]
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Pick Up Date and Time : ${body.date}\r\n
    Order Description: ${body.description}\r\n
    Base Flavor : ${body.baseFlavor}\r\n
    Outer Flavor: ${body.outerFlavor}\r\n
    fillingFlavor: ${body.fillingFlavor}\r\n
    ImageURL:
    <img src="${body.imageFile}" alt='image not avail'></img>
    <img src="${image64}" alt='image not avail img64'></img>
    <h1>This is HTML Tempplate</h1>
  `;

  try {
    await mail.send({
        to: 'webe_90@yahoo.com',
        from: 'webegitu@gmail.com',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
        attachments: [
          {
            filename: 'img',
            content: image64,
            content_id: 'myimagecid'
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