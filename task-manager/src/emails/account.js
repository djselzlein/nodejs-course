const sgMail = require('@sendgrid/mail')
const sendgridApiKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridApiKey)

sgMail.send({
  to: 'djeison.selzlein+test@gmail.com',
  from: 'djeison.selzlein@gmail.com',
  subject: 'This is my first creation!',
  text: 'I hope this one gets to you.'
})