const mail = require('@sendgrid/mail');

mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Pick Up Date and Time : ${body.date}\r\n
    Order Description: ${body.description}\r\n
    ImageURL: ${body.imageURL}
  `;

  try {
    await mail.send({
        to: 'webegitu@gmail.com',
        from: 'webegitu@gmail.com',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      });
    res.status(200).json({ success: true });
    console.log('success')

  } catch(error) {
    console.log(error)
    res.status(200).json({ success: false });
  }


}