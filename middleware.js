import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';
import twilio from 'twilio';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post('/whatsapp', async (req, res) => {
  const from = req.body.From;
  const body = req.body.Body;

  try {
    // 🔹 Send message to Flowise
    const flowResponse = await axios.post(process.env.FLOWISE_API_URL, {
      question: body
    });

    const reply = flowResponse.data.text || "I'm sorry, I didn’t understand that.";

    // 🔹 Send reply via Twilio WhatsApp
    await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: from,
      body: reply
    });

    res.status(200).send('OK');
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).send('Error');
  }
});

app.get('/', (req, res) => res.send('🍽️ Restaurant Chatbot Middleware Running'));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Middleware running on port ${process.env.PORT}`);
});
