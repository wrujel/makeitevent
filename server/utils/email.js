"use strict";
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

async function sendEmail(data) {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
      
    from: "york028633@gmail.com",
    to: "york0286@gmail.com",
    subject: "Hello ✔✔",
    template_id: "d-8dd598b236904181ae560d00be12c13b",
    dynamic_template_data: {
      name: "henry",
      email: "henry_tene@hotmail.com",
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
      pass: "xrehddmmquggyzjl",
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "york0286@gmail.com",
    subject: "Hello ✔",
    text: "Hola esto es una prueba, mi nombre es Henry",
    html: ` 
    <sytle>
        .title{
            color: blue
        }
    </sytle>
    <b class="title">Hello world?</b>
    <b>Aqui se encuentra la info</b>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

sendEmail().catch(console.error);
