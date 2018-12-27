const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendList = (req, res) => {    const { query: { from = 'beatest@dispostable.com' } } = req;
    
    const msg = {
        to: req.body.to,
        from,
        subject: 'Congrats!',
        text: 'Now that you have signed up, you will get access to the lastest news!',
        html: '<strong>Thank You!</strong>',
    };

    sgMail.send(msg).then(() => {
        res.status(200).end();
    }).catch(error => {
        console.error(error.toString());
        res.status(500).end();
    });
}
module.exports = {
        sendList
}
