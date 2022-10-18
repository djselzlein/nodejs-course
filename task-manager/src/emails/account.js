const sgMail = require('@sendgrid/mail')
const sendgridApiKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'djeison.selzlein@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'djeison.selzlein@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Thank you for using our service. We're sorry to see you go, ${name}!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}