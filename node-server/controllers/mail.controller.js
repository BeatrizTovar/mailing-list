const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const read = (req, res) => {
//     res.send("Hellow World!")
// } test

const sendList = (req, res) => {
    const msg = {
        to: 'beatrizctovar@gmail.com',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun?',
        test: 'and easy to do anywhere, even with Node.js?',
        html: '<strong> and easy to do anywhere, even with Node.js></strong>',
    };

    sgMail.send(msg);
}
module.exports = {
    // read
    sendList
}
