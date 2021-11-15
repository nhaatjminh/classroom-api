const emailService = require('./emailService');

exports.sendEmail = async (req, res) => {
    const recipient = req.body.recipient;
    const invitelink = req.body.invitelink;
    const result = await emailService.sendEmail(recipient, invitelink);
    
    if (result) {
        res.status(202).json({message: 'Email sent!'});
    }
    else {
        res.status(404).json({message: "Error!"});
    }
};