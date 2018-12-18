const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
sgMail.setApiKey(SENDGRID_API_KEY)


const sendList = (req, res) => {
    const { query: { to = 'test@example.com', from = 'test@example.com' } } = req;
    // other options could be customized further

    const msg = {
        to,
        from,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>Hello Email app</strong>',
    };

    sgMail.send(msg).then(() => {
        res.status(200).send('Hello, world!').end();
    }).catch(e => {
        console.error(e.toString());
        res.status(500).end();
    });
}
module.exports = {
    // read,
    sendList
}

// const read = (req, res) => {
//     res.send("Hellow World!")
// }
