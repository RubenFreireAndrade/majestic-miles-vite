import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/send-email', (req, res) => {
    const {name, email, message} = req.body;

    const htmlMessage = `
        name: ${name}<br>
        email: ${email}<br>
        message: ${message}<br>
    `;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    // Define email options
    const mailOptions = {
        from: `Majestic Miles <${process.env.GMAIL_USER}>`,
        to: 'rubenswork20@gmail.com',
        subject: 'New Form Submission',
        html: htmlMessage,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
