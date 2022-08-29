import axios from 'axios';

export const podcast = axios.create({
  baseURL: 'https://managetavie.com/api/podcast',
  headers: { 'x-api-key': 'Ca reste entre nous !' },
});

export const mailerlite = axios.create({
  baseURL: 'https://api.mailerlite.com/api/v2/',
  headers: { 'Content-Type': 'application/json', 'X-MailerLite-ApiKey': 'bb6f2d02fbb28532811bdca91a2b1344' },
});

export const emailjs = null;
