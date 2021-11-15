const sgMail = require('@sendgrid/mail')
const apiKey = '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';

exports.sendEmail = async (recipient, invitelink) => {
    sgMail.setApiKey(apiKey)
    var result = false;

    const msg = {
        to: recipient,
        from: '18127153@student.hcmus.edu.vn',
        subject: '[CLASS INVITATION]',
        text: 'You are invited to this class: ' + invitelink,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      
    await sgMail
    .send(msg)
    .then(() => {
        result = true;
    })
    .catch((error) => {
        console.error(error)
    })

    return result;
}
