const nodemailer = require('nodemailer');
const gmailTransporter = require('./transporters/gmail/gmail1');

class Email {
  constructor(transporter) {
    this.transporterStrategy = transporter;
    this.transporter = this.createTransport(transporter);
  }

  setTransporter(transporter) {
    this.transporterStrategy = transporter;
    this.transporter = this.createTransport(transporter);
    return this;
  }

  createTransport(options) {
    return nodemailer.createTransport(options);
  }

  sendMail({
    from = this.transporterStrategy.auth.user, to, subject = '', text = '',
  }) {
    return this.sendMailAction({
      from,
      to,
      subject,
      text,
    });
  }

  sendHtmlMail({
    from = this.transporterStrategy.auth.user, to, subject = '', html = '',
  }) {
    return this.sendMailAction({
      from,
      to,
      subject,
      html,
    });
  }

  sendMailAction(options) {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(options, (err, info) => {
        if (err)reject(err);
        else resolve(info);
      });
    });
  }
}

const email = new Email(gmailTransporter);

module.exports = email;
