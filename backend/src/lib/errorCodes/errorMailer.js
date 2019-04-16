const emailHelper = require('../emailHelper/email');

function formatMail(message) {
  const mailBody = `
  <h1>[Quotes] ERROR !!!</h1>
  <hr />
  <br />
  <br>
  <b>Message:</b>
  <p>${message}</p>
  `;
  return mailBody;
}

const handleError = (err) => {
  console.log(err);
  emailHelper.sendHtmlMail({ subject: 'ERROR !!', html: formatMail(JSON.stringify(err)) });
};

console.error = handleError;
process.on('uncaughtException', handleError);
