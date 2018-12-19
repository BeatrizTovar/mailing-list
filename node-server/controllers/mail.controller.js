const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendList = (req, res) => {    const { query: { to = 'dammitSoo@dispostable.com', from = 'goddammitSoo@dispostable.com' } } = req;
    // other options could be customized further
    
    const msg = {
        to,
        from,
        subject: 'Is this going to work?',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>Hello Email app</strong>',
        templateId: '4c90a9b7-f7d3-4516-ab4c-efc6f959ed99'
    };


    sgMail.send(msg).then(() => {
        res.status(200).send('Hello, world!').end();
    }).catch(e => {
        console.error(e.toString());
        res.status(500).end();
    });
}
module.exports = {
        sendList
}
