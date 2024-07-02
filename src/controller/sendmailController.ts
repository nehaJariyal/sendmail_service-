import express, { Request, Response } from "express";
import * as sendMailHelper from "../../helper/sendmail.helper";
import nodemailer from "nodemailer";
import * as constant from '../../constant/common';
import sequelize from "../../db/sequelize";

interface SendMailAttributes {
//   id: number;
  userName: string;
  email: string;
  user_query: string;
  subject: string;
  createdAt?: Date;
  updatedAt?: Date;
}



export const mailData = async (req: Request, res: Response) => {
  try {
    const dataObj: SendMailAttributes = {
      userName:   req.body.userName,
      email:      req.body.email,
      user_query: req.body.user_query,
      subject:    req.body.subject,
    };
console.log("dataaa",dataObj);

    const userName = req.body.userName;

    const transporter = nodemailer.createTransport({
      host: constant.nodemailer.HOST,
      port: constant.nodemailer.PORT,
      auth: {
        user: constant.nodemailer.USER,
        pass: constant.nodemailer.PASS,
      },
    });

    const createmail = await sendMailHelper.createMail(dataObj);
    const mailOptions = {
      from: '"Sender Name" <nehajariyal2001@gmail.com>',
      to: 'prajapatineha57580@gmail.com',
      subject: 'Hello from Nodemailer with JavaScript',
      text: `Hi ${userName},\nYour request has been successfully submitted to the SunBrih Team. We will reply to your query shortly.\nThanks for reaching out to SunBrih Labs.`,
      html: '<b>Hello world!</b>',
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email: ', error);
      return res.status(500).json({ code: 500, message: 'Error sending email' });
    }

    console.log(createmail);

    return res.status(200).json({ code: 200, userData: dataObj });
  } catch (error) {
    console.log("Error sending mail data", error);
    return res.status(500).json({ code: 500, message: 'Internal Server Error' });
  }
};
