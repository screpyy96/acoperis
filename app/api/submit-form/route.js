import { twilioConfig } from '@/config/twilio'
import twilio from 'twilio'

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Inițializează clientul Twilio
    const client = twilio(twilioConfig.accountSid, twilioConfig.authToken)

    // Formatează mesajul
    const message = `
🏠 Solicitare Nouă Ofertă:

👤 Nume: ${data.name}
📞 Telefon: ${data.phone}
📧 Email: ${data.email}
🔧 Serviciu: ${data.service}
📍 Locație: ${data.location}
💬 Mesaj: ${data.message}

Timestamp: ${new Date().toLocaleString('ro-RO')}
    `.trim()

    // Trimite SMS
    await client.messages.create({
      body: message,
      from: twilioConfig.fromNumber,
      to: twilioConfig.toNumber
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
