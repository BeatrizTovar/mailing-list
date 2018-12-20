const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendList = (req, res) => {    const { query: { from = 'goddammitSoo@dispostable.com' } } = req;
    // other options could be customized further
    
    const msg = {
        to: req.body.to,
        from,
        subject: 'Thank you!',
        text: 'Now that you have signed up, you will get access to the lastest news!',
        html: '<strong>Thank You!</strong>',
        templateId: '4c90a9b7-f7d3-4516-ab4c-efc6f959ed99'
    };

    sgMail.send(msg).then(() => {
        res.status(200).end();
    }).catch(e => {
        console.error(e.toString());
        res.status(500).end();
    });
}
module.exports = {
        sendList
}
