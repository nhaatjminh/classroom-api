const sgMail = require('@sendgrid/mail')
const apiKey = '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';

exports.sendEmail = async (recipient, invitelink, role) => {
    sgMail.setApiKey(apiKey)
    var result = false;

    const msg = {
        to: recipient,
        from: '18127153@student.hcmus.edu.vn',
        subject: '[CLASS INVITATION]',
        text: 'You are invited to this class as a ' + role + ': ' + invitelink,
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
