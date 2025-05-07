require("dotenv").config();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

function sendAlertSMS(to, message) {
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    })
    .then((message) => console.log(`Alert sent: ${message.sid}`))
    .catch((error) => console.error("Twilio Error:", error));
}

module.exports = sendAlertSMS;
