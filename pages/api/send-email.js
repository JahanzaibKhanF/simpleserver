import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, message } = JSON.parse(req.body);
    
    console.log("Request body:", req.body);
    console.log("name:", name);
    console.log("phone:", phone);
    console.log("message:", message);

    try {
      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'jahanzebkhansherikhel@gmail.com',
          pass: 'xnravfaqqtuuxqog',
        },
      });
      
      // Define email options
      const mailOptions = {
       
        to: 'jahanzebkhansherikhel@gmail.com', // Your support email address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      };
      
      // Send the email
      await transporter.sendMail(mailOptions);
         console.log('Name:', name);
      
      res.status(200).json({ message: name + ' Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
