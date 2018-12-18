const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const read = (req, res) => {
    res.send("Hellow World!")
} 

const sendList = (req, res) => {
    const msg = {
        to: req.body,
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun?',
        test: 'and easy to do anywhere, even with Node.js?',
        html: '<strong> and easy to do anywhere, even with Node.js></strong>',
    };

    sgMail.send(msg);
}
module.exports = {
    read,
    sendList
}
