const sgMail = require('@sendgrid/mail')

exports.sendEmail = async (recipient) => {
    sgMail.setApiKey('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')
    var result = false;
    const msg = {
        to: recipient,
        from: '18127153@student.hcmus.edu.vn',
        subject: '[CLASS INVITATION]',
        text: 'You are invited to this class: ',
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
