const mail = require('@sendgrid/mail');

mail.setApiKey(`${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`);

export default async (req, res) => {
  const body = JSON.parse(req.body);
console.log(body)
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.description}\r\n
    ImageURL: ${body.imageURL}
  `;

  try {
    const res = await mail.send({
        to: 'w.benarto@gmail.com',
        from: 'w.benarto@gmail.com',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      });
    
    console.log(res)

  } catch(error) {
    console.log(error)
  }

  res.status(200).json({ status: 'Ok' });
}