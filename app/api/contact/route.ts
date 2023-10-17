const nodemailer = require("nodemailer");

export async function POST(req:Request){
    const {name,email,message}= await req.json();
  

    const transporter = await nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
        secure: true,
      });
      const mailData = {
        from:'manjeetkamboj394@gmail.com',
        to:'manjeetkamboj394@gmail.com',
        subject:`Message from ${name}`,
        text: `${message} | Sent from: ${email}`,
        html: `<div>${message}</div><p>Sent from: ${email}</p>`
      }

      await transporter.sendMail(mailData);
      

    return Response.json({message:"success"});
}