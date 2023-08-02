import { Mailer } from 'react-native-mail'

export const sendEmailWithAttchment = (url) => {
  Mailer.mail(
    {
      subject: 'Screenshot',
      recipients: ['example@gmail.com'],
      ccRecipients: ['example1@gmail.com'],
      //bccRecipients: ['supportBCC@example.com'],
      body: '<b>Hello</b><p>Please check attached screenshot.</p>',
      isHTML: true,
      attachment: {
        path: url, // The absolute path of the file from which to read data.
        type: 'png', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        //name: 'error.png',   // Optional: Custom filename for attachment
      },
    },
    (error, event) => {
      console.log('errror', error)
    }
  )
}
