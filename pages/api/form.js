const mail = require('@sendgrid/mail');
const SENDGRID_API_KEY = "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";
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);  
  
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'SENDER-EMAIL',
    from: 'RECEIVER-EMAIL',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);
  
  res.status(200).json({ status: 'OK' });
};

 