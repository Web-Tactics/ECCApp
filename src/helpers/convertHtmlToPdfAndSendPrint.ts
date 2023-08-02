import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'

export async function convertHtmlToPdfAndSendPrint(htmlContent: string) {
  try {
    const pdfFilePath = await printToFileAsync({
      html: htmlContent,
      base64: false,
    })

    await shareAsync(pdfFilePath.uri)
  } catch (error) {
    console.log(error)
  }
}
