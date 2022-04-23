require("dotenv").config();
("use strict");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

async function sendEmail(data) {
  sgMail.setApiKey(
    "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"
  );

  const msg = {
    from: "york028633@gmail.com",
    to: "henry_tene@hotmail.com",
    subject: "Hello ✔✔",
    template_id: "d-8dd598b236904181ae560d00be12c13b",
    dynamic_template_data: {
      name: "henry",
      email: "henry_tene@mail.com",
    },
  };
  try {
    const result = await sgMail.send(msg);
    console.log("Correo enviado exitosamente", result);
  } catch (error) {
    console.log("error: " + error);
  }
}
async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "york028633@gmail.com",
      pass: "ogdthbngmycnsrmy",
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <noreplay@example.com>',
    to: "daniela.jaramillo.rey@gmail.com,henrytenetorres@gmail.com,henry_tene@hotmail.com,york0286@hotmail.com",
    subject: "Hello ✔",
    text: "Hola esto es una prueba, mi nombre es Henry",
    html: ` 
   
    <b >Hola esto es una prueba, mi nombre es Henry Tene torres</b>
    <b>Esto es un email de prueba con nodemailer para envio de archivos</b>
    `,
   
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
/* module.exports = {
  sendEmail,
}; */
